const User = require('../models/user');
const PublicationsModel = require('../models/publications');

const publication = async (username, pubData, fileName, fileType) => {

    const user = new User();

    const userData = await User.findOne({ 'username': username });

    const addingPublication = await PublicationsModel.create({
        description: pubData,
        owner: username,
        fileName: fileName,
        type: fileType
    });

    userData.myPublications.push(addingPublication._id);

    userData.save();

    return addingPublication;

}

const getMyPublications = async (username) => {

    return await User.findOne({ 'username': username}).populate('myPublications').lean(); 
}

module.exports = {
    publication,
    getMyPublications
}