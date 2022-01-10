class V1::GreetingsController < ApplicationController
  def index
    render json: { greetings: [
      {
        message: 'Hello From the controller'
      }
    ] }.to_json
  end
end
