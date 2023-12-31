const User = require('../models/user');
const PublicationsModel = require('../models/publications');
const NotificationModel = require('../models/notification');

const publication = async (username, pubData, fileName, fileType, profileImage, followers) => {

    const user = new User();

    const userData = await User.findById(username);

    const addingPublication = await PublicationsModel.create({
        description: pubData,
        owner: username,
        fileName: fileName,
        type: fileType,
        ownerImage: profileImage,
        likes: 0,
        disLikes: 0,
        followers
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

    const fileName = await PublicationsModel.findById(postId);

    for (let el of user.myPublications) {

        if (String(el) === postId) {

            const index = user.myPublications.indexOf(el);

            user.myPublications.splice(index, 1);

            user.save();

        }
    }

    await PublicationsModel.findByIdAndDelete(postId);

    return fileName.fileName;
}

const editPost = async (postId, text) => {

    return await PublicationsModel.findByIdAndUpdate(postId, { "description": text });
}


const getAllPosts = async () => {

    return await PublicationsModel.find();
}

const getPostById = async (postId) => {
    return await PublicationsModel.findById(postId);
}


const like = async (postId) => {
    const post = await PublicationsModel.findById(postId);

    post.likes += 1;

    post.save();
}

const disLike = async (postId) => {
    const post = await PublicationsModel.findById(postId);

    post.disLikes += 1;

    post.save();
}

const coment = async (data) => {

    const post = await PublicationsModel.findById(data.postId);

    post.comments.push(data);

    post.save();

    return post;
}

const addNotification = async (data) => {

    return await NotificationModel.create(data);

}

const getNotification = async () => {

    return await NotificationModel.find();

}

const getImage = async () => {

    return await PublicationsModel.find({ type: "image/jpeg" }).lean();
}

const getVideo = async () => {

    return await PublicationsModel.find({ type: "video/mp4" }).lean();
}

const search = async (text) => {

    return await PublicationsModel.find({ fileName: { $regex: `${text}` } }).lean();
}


module.exports = {
    publication,
    getMyPublications,
    deletePost,
    editPost,
    getAllPosts,
    getPostById,
    like,
    disLike,
    coment,
    addNotification,
    getNotification,
    getImage,
    getVideo,
    search

}