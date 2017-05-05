require_relative "./../jobs/send_5pm_email_job"
class User < ActiveRecord::Base
  has_many :sent_posts, class_name: 'Post', foreign_key: :sender_id
  has_many :received_posts, class_name: 'Post', foreign_key: :recipient_id
  has_many :user_pairing_sessions
  has_many :pairing_sessions, :through => :user_pairing_sessions
  after_create :seed_with_reviews
  after_create :send_email_create_jobs


  def self.create_with_omniauth(auth)
    my_user = nil
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.email = auth['info']['email']
      user.repos_url = auth['extra']['raw_info']['repos_url']
      user.nickname = auth['info']['nickname']

      my_user = user
      end
  end

  def send_email_create_jobs
    User.send_confirmation_email(user = self) 
    User.send_5pm_email(user = self)
    User.send_weekly_email(user = self)
  end

  def seed_with_reviews(user = self)
    p "Existing #{Post.count} Post"
   Post.create!({ admin_message: "Pairing with them was great",content: "You are such a great person. I really appreciate your feedback. I hope to pair with you again soon!", sender_id: "1", recipient_id: user.id.to_s, rating: 4 })

   Post.create!({ admin_message: "Pairing with them was great",content: "Have a great day. I hope you have a great day!", sender_id: "1", recipient_id: user.id.to_s, rating: 4 })

   Post.create!({ admin_message: "Pairing with them was great",content: "Don't you love this awesome webapp it was built with tender, love, and care.", sender_id: "1", recipient_id: user.id.to_s, rating: 4 })

   Post.create!({ admin_message: "Pairing with them was great",content: "I'm pretty sure my partner farted and didn't own up to it", sender_id: "1", recipient_id: user.id.to_s, rating: 4 })

   Post.create!({ admin_message: "Pairing with them was great",content: "Deep doubts, deep wisdom; small doubts, little wisdom.", sender_id: "1", recipient_id: user.id.to_s, rating: 4 })

   Post.create!({ admin_message: "Pairing with them was great",content: "A gem is not polished without rubbing, nor a man perfected without trials.", sender_id: "1", recipient_id: user.id.to_s, rating: 4 })
   p "Created #{Post.count} Post"
  end

  def self.send_confirmation_email(user)
     UserMailer.welcome_email(user).deliver_now
     # format.html { redirect_to(@user, notice: 'User was successfully created.') }
     # format.json { render json: @user, status: :created, location: @user }
  end


  def self.send_5pm_email(user)  #Send weekday 5pm email with delayed job cron
    Send5pmEmailJob.set(cron: '0 17 * * 1,2,3,4,5').perform_later(@user) 
  end

  def self.send_weekly_email(user)  #Send 7am Saturday email delayed job cron
    SendWeeklyEmailJob.set(cron: '0 7 * * 6').perform_later(@user) 
  end

  def self.all_except(user)
    where.not(id: user)
  end

end