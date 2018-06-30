Rails.application.routes.draw do
  scope '/api' do
    resources :trees, only: [:show], param: :root_uri, constraints: { root_uri: /[^\/]+/ }
  end
end
