# Angular Tea & Pronouns

[View live here!](https://tea-and-pronouns-angular.herokuapp.com/)

## Usage

The back end is written in Ruby, so install Ruby if you don't have it.

```sh
# Install the Ruby deps
gem install bundler
bundle install

# Run the app on localhost:9292
bundle exec rackup
```


## Deployment

This app is deployed on Heroku!


```sh
# Set up the project for deployment from your machine
# (only needs to be done once)
heroku git:remote -a tea-and-pronouns-angular

# Deploy latest commit to Heroku!
git push heroku HEAD:master
```


## Notes

In development and test we use the sqlite3 database for convenience. In
production on Heroku we use the Postgresql database.
