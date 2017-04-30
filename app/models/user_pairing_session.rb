class UserPairingSession < ApplicationRecord
  belongs_to :user
  belongs_to :pairing_session
end
