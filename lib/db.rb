require "sequel"

DB = if ENV.fetch("RACK_ENV") == "production"
       Sequel.connect(ENV.fetch("DATABASE_URL"), adapter: "postgres")
     else
       Sequel.connect("sqlite://dev_database.sqlite")
     end

DB.create_table? :preferences do
  primary_key :id
  String :first_name
  String :tea
  String :pronoun
  String :diet
end
