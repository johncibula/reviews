class CreateUserPairingSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :user_pairing_sessions do |t|
      t.integer :user_id, foreign_key: true
      t.integer :pairing_sessions_id, foreign_key: true

      t.timestamps
    end
  end
end
