require_relative './db'

module Preference
  DATASET = DB[:preferences]

  def self.all
    # DATASET.all
    [{
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
