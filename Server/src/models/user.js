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
    myPublications: [{
        type: mongoose.Types.ObjectId,
        ref: 'PublicationsModel'
    }],
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }],
    followed: [{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }],
    profileImage: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;