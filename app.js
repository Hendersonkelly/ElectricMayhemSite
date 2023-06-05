const express = require('express');

let app = express()
const io = require('socket.io')();
let PORT = 3000


app.use(express.static('public'))
app.set('view engine', 'ejs')


app.use(require('./routes/index'))
app.use(require('./routes/performances'))
app.use(require('./routes/soundtracks'))
app.use(require('./routes/albums'))
app.use(require('./routes/feedback'))
app.use(require('./routes/aboutUs'))
app.use(require('./routes/chat'))

const server = app.listen(PORT, () => {
    console.log(`Listenting on port ${PORT}`);
})

io.attach(server)

io.on('connection', (socket) => {
    socket.emit('chatMessage', {msg: "Hello from our backend server"})

    socket.on('postMessage', (data) => { //what our client sends to the server
        io.emit('updateMessages', data)//broadcasting back out to all listenting clients        
    })

    socket.on('disconnect', (user) => {
        io.emit('user has left the room')
    })
})

