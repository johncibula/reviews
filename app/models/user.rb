class User < ActiveRecord::Base
 has_many :sent_posts, class_name: 'Post', foreign_key: :sender_id
 has_many :received_posts, class_name: 'Post', foreign_key: :recipient_id

 def self.create_with_omniauth(auth)
   my_user = nil
   create! do |user|
     user.provider = auth["provider"]
     user.uid = auth["uid"]
     user.name = auth["info"]["name"]
     user.email = auth['info']['email']
     user.repos_url = auth['extra']['raw_info']['repos_url']
     user.nickname = auth['info']['nickname']

     
     # format.html { redirect_to(@user, notice: 'User was successfully created.') }
     # format.json { render json: @user, status: :created, location: @user }
     my_user = user
   end
   User.send_confirmation_email(my_user) 
 end

 def self.send_confirmation_email(user)
    UserMailer.welcome_email(user).deliver_now
end

def self.all_except(user)
   where.not(id: user)
 end
end