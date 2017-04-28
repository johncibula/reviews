class CreatePost < ActiveRecord::Migration[5.0]
  def change
    create_table :posts, id: :uuid, default: "gen_random_uuid()", force: true do |t|
      t.text :admin_message, null: false
      t.text :content, null: false
      t.string :sender_id, null: false
      t.string :recipient_id, null: false
      t.integer :rating, null: false
      t.string :willing_to_work, default: "sure", null: false

      t.timestamps
      t.index([:sender_id, :recipient_id], unique: false)
    end
  end
end
