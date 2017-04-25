require "sequel"

DB = Sequel.connect('sqlite://dev_database.sqlite')

DB.create_table? :preferences do
  primary_key :id
  String :first_name
  String :tea
  String :pronoun
  String :diet
end


module Preference
  DATASET = DB[:preferences]

  def self.all
    # DATASET.all
    [ {
	id: 1,
	firstName: "Pippa",
	tea: "rooibos",
	pronoun: "she",
	diet: "no gluten"
	},
	{
	id: 2,
	firstName: "Richard",
	tea: "earl grey",
	pronoun: "he",
	diet: "none"
	}]
  end
end
