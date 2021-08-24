Rails.application.routes.draw do
  
  root 'static#home'

  namespace :api do
    namespace :v1 do 
      resources :teams, only: [:index, :show, :create, :update, :destroy] do
        resources :cars, only: [:index, :show, :create, :update, :destroy]
      end
      resources :cars, only: [:index, :show]
    end
  end

  get '*path', to: 'static#home'
end
