Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    defaults format: :json do
      resources :todoos, only: [:index, :show, :create, :destroy, :update]
    end
  end

  root to: 'static_pages#root'


end
