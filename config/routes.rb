Rails.application.routes.draw do
  scope '/api' do
    resources :trees, only: [:show]
  end
end
