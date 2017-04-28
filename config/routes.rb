Rails.application.routes.draw do

  root to: "posts#index"
  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

  resources :users
  resources :posts
  resources :sessions
  # resources :edit

  # get 'home/logout'
  # post 'post/edit'
end
