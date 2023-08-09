const User = require('../models/user');

const getFollowed = async (id) => {

    return await User.findById(id).populate('followed').lean();

}

const getFollowers = async (id) => {

    return await User.findById(id).populate('followers').lean();

}

const sendMessage = async (data) => {

    const sender = await User.findById(data.sender);
    const receiver = await User.findById(data.receiver);

    sender.sendMessages.push(data);
    receiver.messageReceived.push(data);

    sender.save();

    receiver.save();

}

const answerToMessage = async (data) => {
    const sender = await User.findById(data.sender);
    const receiver = await User.findById(data.receiver);

    sender.sendMessages.push(data);
    receiver.messageReceived.push(data);

    sender.save();

    receiver.save();
}


const mySentMessages = async (id) => {

    const user = await User.findById(id).lean();

    return user.sendMessages;
}

const myReceivedMessages = async (id) => {

    const user = await User.findById(id).lean();

    return user.messageReceived;
}

const deleteSentMessage = async (data) => {

    const user = await User.findById(data.id);

    for (let el of user.sendMessages) {

        if (el.msg === data.msg) {

            const index = user.sendMessages.indexOf(el);

            user.sendMessages.splice(index, 1);

            user.save();

        }
    }

    return user.sendMessages;

}

const deleteReceivedMessage = async (data) => {

    const user = await User.findById(data.id);

    for (let el of user.messageReceived) {

        if (el.msg === data.msg) {

            const index = user.messageReceived.indexOf(el);

            user.messageReceived.splice(index, 1);

            user.save();

        }
    }

    return user.messageReceived;

}

const follow = async (data) => {

   const logUser =  await User.findById(data.logUserId);

   const postOwner = await User.findById(data.postOwnerId);

   logUser.followed.push(data.postOwnerId);

   logUser.save();
   
   postOwner.followers.push(data.logUserId);

   postOwner.save();


}

const unFollow = async (data) => {

    const logUser =  await User.findById(data.logUserId);

    const postOwner = await User.findById(data.postOwnerId);

    
    for (let el of logUser.followed) {

        if (String(el) === data.postOwnerId) {

            const index = logUser.followed.indexOf(el);

            logUser.followed.splice(index, 1);

            logUser.save();

        }
    }

    
    for (let el of postOwner.followers) {

        if (String(el) === data.logUserId) {

            const index = postOwner.followers.indexOf(el);

            postOwner.followers.splice(index, 1);

            postOwner.save();

        }
    }
 
 }
 

const getUserProfileImage = async (username) => {

    return await User.findOne({ username: username }).lean();
}

const getUserData = async (username) => {

    return await User.findOne({ username: username }).lean();
}

const getUser = async (id) => {

    return await User.findById(id).lean();

}

const updateUserData = async (id, data) => {

    const newData = data;

    return await User.findByIdAndUpdate(id, newData);
}

const updateUserImage = async (fileName, userId) => {

    return await User.findByIdAndUpdate(userId, { profileImage: fileName }).lean();
}

const deleteImage = (data) => {

    return User.findByIdAndUpdate(data.userId, { profileImage: '' });

}

const getOldImageName = async (data) => {
    return await User.findById(data).lean();
}

const getMyNotification = async (id, body) => {

    const user = await User.findById(id);

    if (body.length > 0) {

        user.notification.push(body);

        user.save();
    }
    return user;
}

module.exports = {
    getUserProfileImage,
    getUserData,
    updateUserImage,
    deleteImage,
    getOldImageName,
    updateUserData,
    getMyNotification,
    getUser,
    follow,
    unFollow,
    getFollowed,
    getFollowers,
    sendMessage,
    mySentMessages,
    myReceivedMessages,
    answerToMessage,
    deleteSentMessage,
    deleteReceivedMessage
}