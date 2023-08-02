const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({

    post: {
        type: Object
    },
    user: {
        type: Object
    }
});


const NotificationModel = mongoose.model('NotificationModel', notificationSchema);

module.exports = NotificationModel;