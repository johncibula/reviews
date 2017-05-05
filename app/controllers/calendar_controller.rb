class CalendarController < ApplicationController

  def index
    CalendarController.create_weekly_schedule
    @post  = CalendarController.pairing_schedule(current_user)
    PairingSession.destroy_all
    UserPairingSession.destroy_all
    schedule = generate_pairs
    render json: schedule
  end

  def self.pairing_schedule (user = current_user)
    user_sessions = user.pairing_sessions
    schedule = {}
    user_sessions.each do | session |
      schedule[session.day] = CalendarController.get_users(session, user)
    end
    schedule
  end


  def self.create_weekly_schedule ( group_size: 2, sessions: 5)
    group_size = 2 if group_size.class != Integer || group_size < 2 
    sessions = 1 if  sessions.class != Integer || sessions < 1
    sessions = 5 if sessions > 5
    
    users = User.all
    weekday_indice = 0
    
    5.times do
      groups = users.shuffle.each_slice(group_size).to_a
      CalendarController.create_day_schedule(groups, weekday_indice)
      weekday_indice += 1
    end
  end

  private 

  def self.get_users (session, user = current_user)
    users = session.users.select { | person | person.id  != user.id }
    names = ""
    users.each do | user |
      names = names + user.nickname + " " 
    end
    names
  end

  def self.create_day_schedule(groups, weekday_indice)
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    groups.each do | group |
      if group.size > 1
        pairing_session = PairingSession.create(day: days[weekday_indice])
        CalendarController.connect_groups_to_pairing_session(group, pairing_session)
      end
    end
  end

  def self.connect_groups_to_pairing_session(group, pairing_session)
    increment = 0
    while increment < group.size
      pairing_session.user_pairing_sessions.create!(user_id: group[increment].id)
      increment += 1
    end
  end
end

