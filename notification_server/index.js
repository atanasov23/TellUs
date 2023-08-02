const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer();
const cors = require('cors');
const io = require('socket.io')(server, { cors: { origin: "*" } });

let notification = [];

let user = [];

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.post('/:id', (req, res) => {

    const data = req.body;

    const userId = req.params.id;

    data.id = userId;

    notification.push(data);

    res.send({})
})

/* const fetchData = async () => {
    
    return await fetch('http://localhost:3000/allPosts')
    .then(res => res.json())
    .then(res => res);
} */

io.on('connection', async (socket) => {


    /* const allPost = await fetchData(); */

    socket.on('conn', (res) => {

        const userId = res;
        const socketId = socket.id;

        /*   user.push({
              userId,
              socketId
          }); */

        user = [{
            userId,
            socketId
        }]

        let notificationForSend = [];
        setInterval(() => {

            console.log(200);



            for (let el of notification) {

            
                for (let followers of el.user.followers) {

                    if (followers == userId) {

                        if (el.id !== userId) {

                            /* io.emit('conn', user); */
                            notificationForSend.push(el.post);

                        }

                        /* io.sockets.to(socketId).emit('conn', el.post); */
                    }

                }

            }

            socket.broadcast.emit('conn', notificationForSend);

            notificationForSend = [];
        }, 10000)

        /*   setInterval(() => {
              io.emit('conn', user);
          }, 10000) */

    })




})

app.listen(2000);

io.listen(1000);
