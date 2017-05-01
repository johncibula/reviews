class Send5pmEmailJob < ApplicationJob
  queue_as :default

  def perform(user)
    @user = user
      UserMailer.eod_review_email(@user).deliver_later
  end
end
