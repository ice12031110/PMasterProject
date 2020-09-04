import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {
  const element = document.getElementById('room-id');
  const room_id = element.getAttribute('data-room-id')
  // console.log(element)
  // console.log(room_id)
  // console.log(room_id)
  consumer.subscriptions.create( { channel: "RoomChannel", room_id: room_id }, {
    connected() {
      console.log("連接" + room_id)
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      console.log(data)
      // const messageContainer = document.getElementById('messages')
      
    }
  });
})

