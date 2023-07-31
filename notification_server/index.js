const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer();
const cors = require('cors');
const io = require('socket.io')(server, { cors: { origin: "*" } });

let notification = [];

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.post('/', (req, res) => {

    const data = req.body

    notification.push(data);

    res.send({})
})

/* const fetchData = async () => {
    
    return await fetch('http://localhost:3000/allPosts')
    .then(res => res.json())
    .then(res => res);
} */

io.on('connection', (socket) => {
    

/*     const allPost = await fetchData();

    socket.on('conn', (res) => {

       notification.push(res);

        io.emit('create',res) 
         io.emit('conn', notification);

    }) */

    setInterval(() => {
        io.emit('conn', notification);
    },10000)
    
    
})

app.listen(2000);

io.listen(1000);
