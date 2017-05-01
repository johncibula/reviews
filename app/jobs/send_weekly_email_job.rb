class SendWeeklyEmailJob < ApplicationJob
  queue_as :default
  attr_reader :id
  def initialize( args )
      super(args)
      id = rand(4000)
  end
  def perform(user)
    @user = user
    UserMailer.weekly_email(@user).deliver_later
  end
end