class UserMailer < ApplicationMailer
  default from: 'ppearing@gmail.com'

  def welcome_email(user)
    @user = user
    @url = 'localhost:3000/sessions/new' 
    mail(to: "rvasqz86@gmail.com", subject: 'Welcome to Pearing!')   
  end

  def eod_review_email(user)
    @user = user
    @url = 'localhost:3000/sessions/new' 
    mail(to: "ppearing@gmail.com", subject: 'Leave a review for your coding partner!')
  end

  def weekly_email(user)
    @user = user
    @url = 'localhost:3000/sessions/new' 
    mail(to: "ppearing@gmail.com", subject: 'Here are your Pairning Reviews')
  end
end