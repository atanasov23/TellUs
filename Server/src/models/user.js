const mongoose = require('mongoose');

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
    publications: [{
        type: String
    }],
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }],
    followed: [{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;