require "sinatra/base"
require "json"
require_relative 'preference'

class App < Sinatra::Application
  set :public_folder, "./public"

  before "/api/*" do
    content_type "application/json"
  end

  get "/api/preferences" do
    Preference.all.to_json
  end

  get "*" do
    File.read("./public/index.html")
  end
end
