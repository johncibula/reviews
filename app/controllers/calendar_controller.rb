class CalendarController < ApplicationController

  def self.create_weekly_schedule ( group_size: , size_of_week:)
    #return nil if !current_user.admin
    group_size = 2 if group_size.class != Number || group_size < 2 
    size_of_week = 1 if  size_of_week.class != Number || size_of_week < 1
    size_of_week = 5 if size_of_week > 5
    
    users = Users.all
    weekday_indice = 0
    
    size_of_week.times do
      groups = users.shuffle.each_slice(group_size).to_a
      UsersController.create_day_schedule(groups, weekday_indice)
      weekday_indice += 1
    end
  end

  private 

  def self.create_day_schedule(groups, weekday_indice)
    DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    groups.each do | group |
      if group.size > 1
        pairing_session = PairingSessions.create(day: DAYS[weekday_indice])
        UsersController.connect_groups_to_pairing_session(group, pairing_session)
      end
    end
  end

  def self.connect_groups_to_pairing_session(group, pairing_session)
    increment = 0
    while increment < group.size
      UserPairingSession.create(user_id: group[increment].id, pairing_session_id: pairing_session.id)
      increment += 1
    end
  end
end
