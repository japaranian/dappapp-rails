class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :load_tweets



  def load_tweets
		client = Twitter::REST::Client.new do |config|

      config.consumer_key = 
      config.consumer_secret = 
      config.access_token = 
      config.access_token_secret = 

		end
    @tweets = client.user_timeline[0..4]
  end
end
