Rails.application.routes.draw do
  get 'money', to: 'hello_world#index'
  root to: "posts#index"
  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

  resources :users
  resources :posts
  resources :sessions
  resources :edit

  get 'home/logout'
  post 'post/edit'
  put 'calendar/index'
end
