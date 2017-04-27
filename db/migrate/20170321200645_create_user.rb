class CreateUser < ActiveRecord::Migration[5.0]
   def change
     create_table :users do |t|
      t.string :email, :length=>50
      t.string :provider,:length=>50, null: false
      t.string :uid,:length=>50, null: false
      t.string :name,:length=>50, null: false
      t.string :nickname, :length=>50
      t.string :repos_url, :length=> 150
      t.boolean :admin
      t.boolean :profile_approved
      t.index([:email, :name], unique: true)
     end
   end
end