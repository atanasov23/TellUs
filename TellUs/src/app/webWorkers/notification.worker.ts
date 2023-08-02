/// <reference lib="webworker" />

addEventListener('message', async (id) => {

  const userID = id.data;

  console.log(userID);


  let notificationForSend: any = [];

  const getNotification = async () => {

    let notification: any = [];

    await fetch('http://localhost:3000/getNotification').then(res => res.json()).then(res => notification = res);

    return notification;

  }


  let sendNotification: any = setInterval(async () => {

    const notification = await getNotification();

    for (let el of notification) {

      for (let followers of el.user.followers) {

        if (followers == userID) {

          /* io.emit('conn', user); */

          if (notificationForSend.some((post: { description: any; }) => el.post.description === post.description)) {

            console.log("Object found inside the array.");
          } else {
            console.log("Object not found.");

            notificationForSend.push(el.post);
          }



          /* io.sockets.to(socketId).emit('conn', el.post); */
        }

      }


      console.log(notificationForSend);
      /* notificationForSend = []; */

    }



  }, 5000);


  if (userID == 'exit') {

    console.log('da');


     clearInterval(sendNotification)
  }

  postMessage(notificationForSend);



});



