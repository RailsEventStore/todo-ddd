Rails.application.routes.draw do
  root "tasks#index"
  resources :tasks
  post "tasks/:id/toggle", to: "tasks#toggle"
end
