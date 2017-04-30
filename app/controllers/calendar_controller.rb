class CalendarController < ApplicationController

  def self.create_weekly_schedule ( group_size: 2, sessions: 5)
    #return nil if !current_user.admin
    group_size = 2 if group_size.class != Integer || group_size < 2 
    sessions = 1 if  sessions.class != Integer || sessions < 1
    sessions = 5 if sessions > 5
    
    users = User.all
    weekday_indice = 0
    
    sessions.times do
      groups = users.shuffle.each_slice(group_size).to_a
      CalendarController.create_day_schedule(groups, weekday_indice)
      weekday_indice += 1
    end
  end

  private 

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

