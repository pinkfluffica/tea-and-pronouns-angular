require "sequel"

DB = Sequel.connect('sqlite://dev_database.sqlite')

DB.create_table? :preferences do
  primary_key :id
  String :name
  String :tea
  String :pronoun
  String :diet
end


module Preference
  DATASET = DB[:preferences]

  def self.all
    DATASET.all
  end
end
