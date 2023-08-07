const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    myPublications: [{
        type: Schema.Types.ObjectId,
        ref: 'PublicationsModel'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    followed: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    profileImage: {
        type: String
    },
    sendMessages: [{
        type: Object
    }],
    messageReceived: [{
        type: Object
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;