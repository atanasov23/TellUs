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
        ref: 'Users'
    }],
    followed: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }],
    profileImage: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;