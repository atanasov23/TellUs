const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({

    type: {
        type: String
    },
    fileName: {
        type: String
    },
    owner: {
        type: String
    },
    ownerImage: {
        type: String
    },
    description: {
        type: String
    },
    comments: [{
        type: Object
    }],
    likes: {
        type: Number
    }

});


const PublicationsModel = mongoose.model('PublicationsModel', publicationSchema);

module.exports = PublicationsModel;