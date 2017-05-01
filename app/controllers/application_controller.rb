require 'set'
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user
  helper_method :generate_pairs

  module ReactOnRails::Controller
  end

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def generate_pairs(user = current_user)
    CalendarController.pairing_schedule(user)
  end
end
