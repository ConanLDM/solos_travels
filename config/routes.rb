Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'destinations/index'
      post 'destinations/create'
      get '/show/:id', to: 'destinations#show'
      delete '/destroy/:id', to: 'destinations#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
