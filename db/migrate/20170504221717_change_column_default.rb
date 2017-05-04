class ChangeColumnDefault < ActiveRecord::Migration[5.0]
  def change
    change_column_default :users, :email, "ppearing@gmail.com"
    change_column_default :users, :name, "Name Not provided"
    change_column_default :users, :provider, "github"
    change_column_default :users, :nickname, "nickname"
  end
end
