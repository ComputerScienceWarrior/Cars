Rails.application.routes.draw do
  
  root 'static#home'

  namespace :api do
    namespace :v1 do 
      resources :teams, only: [:index, :show, :create, :update, :destroy] do
        resources :cars, only: [:index, :show, :create, :update, :destroy]
      end
    end
  end

  # get '*path', to: :all, via: 'static#home'
end
