const User = require('../models/user');

const getUserProfileImage = async (username) => {

    return await User.findOne({ username: username}).lean();
}

const getUserData = async (username) => {

    return await User.findOne({ username: username}).lean();
}

const updateUserData = async (id, data) => {

   const newData = data;

    return await User.findByIdAndUpdate(id, newData);
}

const updateUserImage = async (fileName, userId) => {

    return await User.findByIdAndUpdate(userId, {profileImage: fileName}).lean();
}

const deleteImage = (data) => {

    return User.findByIdAndUpdate(data.userId, {profileImage: ''});

}

const getOldImageName = async (data) => {
    return await User.findById(data).lean();
}

module.exports = {
    getUserProfileImage,
    getUserData,
    updateUserImage,
    deleteImage,
    getOldImageName,
    updateUserData
}