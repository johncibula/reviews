class User < ActiveRecord::Base
  has_many :sent_posts, class_name: 'Post', foreign_key: :sender_id
  has_many :received_posts, class_name: 'Post', foreign_key: :recipient_id
  has_many :user_pairing_sessions
  has_many :pairing_sessions, :through => :user_pairing_sessions

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.email = auth['info']['email']
      user.repos_url = auth['extra']['raw_info']['repos_url']
      user.nickname = auth['info']['nickname']
    end
  end

  def self.all_except(user)
    where.not(id: user)
  end
end