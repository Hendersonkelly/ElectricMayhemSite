// grab username and message out of the DOM
let chatUsername = document.querySelector('#chat-username')
let chatMessage = document.querySelector('#chat-message')

//commect to socket.io
const socket = io()
console.log(socket);

//emit a messsage
socket.on('chatMessage', (msg)=>{
    
  })

let chatForm = document.querySelector('.chat-form');

chatForm.addEventListener('submit', e=>{

       
    e.preventDefault(); 

  //sending amessag out to our node server 

    socket.emit('postMessage', {
        username: chatUsername.value, 
        message: chatMessage.value
    })


    chatMessage.value = "" 

    chatMessage.focus();


})


socket.on('updateMessages', data=>{

    ;  //{username:,message}

    showMessage(data)
})




const showMessage = (data) => {

let chatDisplay = document.querySelector('.chat-display')
let newMessage = document.createElement('p')


if(chatUsername.value == data.username){

    newMessage.className = "bg-success chat-text"
}
else{
    newMessage.className = 'bg-info text-warning chat-text'
}

newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`

chatDisplay.insertBefore(newMessage, chatDisplay.firstChild)
}


//listening to broadcasts from our server 
