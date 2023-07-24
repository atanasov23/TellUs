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

    return await User.findOne({ 'username': username }).populate('myPublications').lean();
}

const deletePost = async (postId, userId) => {

    const user = await User.findById(userId);

    for (let el of user.myPublications) {

        if (String(el) === postId) {

            const index = user.myPublications.indexOf(el);

            user.myPublications.splice(index, 1);

            user.save();

        }
    }

    return await PublicationsModel.findByIdAndDelete(postId);
}


module.exports = {
    publication,
    getMyPublications,
    deletePost
}