class CreatePairingSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :pairing_sessions do |t|
      t.string :day

      t.timestamps
    end
  end
end
