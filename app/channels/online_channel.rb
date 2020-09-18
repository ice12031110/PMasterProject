class OnlineChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "online_#{params[:room_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
