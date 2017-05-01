require_relative "./../jobs/send_5pm_email_job"
class User < ActiveRecord::Base
  has_many :sent_posts, class_name: 'Post', foreign_key: :sender_id
  has_many :received_posts, class_name: 'Post', foreign_key: :recipient_id
  has_many :user_pairing_sessions
  has_many :pairing_sessions, :through => :user_pairing_sessions

  def self.create_with_omniauth(auth)
    my_user = nil
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.email = auth['info']['email']
      user.repos_url = auth['extra']['raw_info']['repos_url']
      user.nickname = auth['info']['nickname']

      my_user = user
      end
      User.send_confirmation_email(my_user) 
      User.send_5pm_email(my_user)
      #User.send_weekly_email(my_user)
  end

  def self.send_confirmation_email(user)
     UserMailer.welcome_email(user).deliver_now
     # format.html { redirect_to(@user, notice: 'User was successfully created.') }
     # format.json { render json: @user, status: :created, location: @user }
  end


  def self.send_5pm_email(user)  #Method to send 5pm email with delayed job cron
    Send5pmEmailJob.set(cron: '0 17 * * 1,2,3,4,5').perform_later(@user) 
  end

  # def self.send_weekly_email(user)  #Method to send 7am Saturday email delayed job cron
  #   SendWeeklyEmailJob.set(cron: '0 7 * * 6').perform_later(@user) 
  # end

  def self.all_except(user)
    where.not(id: user)
  end

end