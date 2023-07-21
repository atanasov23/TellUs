const User = require('../models/user');

const getUserProfileImage = async (username) => {

    return await User.findOne({ username: username}).lean();
}

module.exports = {
    getUserProfileImage
}