class PairingSession < ApplicationRecord
  has_many :user_pairing_sessions
  has_many :users, through: :user_pairing_sessions
end
