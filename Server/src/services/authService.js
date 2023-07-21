const bcrypt = require('bcrypt');
const User = require('../models/user');
const SECRET = 'awf232daw343gse32gsgs3223gshh';
const myUtils = require('../utils/util');

const register = async (data) => {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return User.create({
        username: data.username,
        email: data.email,
        password: hashedPassword,
        profileImage: ''
    });
}

const login = async (data) => {

    const user = await User.findOne({ username: data.username });

    if (user) {

        const decryptPassword = await bcrypt.compare(data.password, user.password);

        if (decryptPassword) {

            const payload = {
                _id: user._id,
                username: user.username,
                email: user.email
            }

            const jwt = await myUtils.jwpPromises.sign(payload, SECRET);

            return /* jwt */{
                jwt,
                user
            };

        } else {

            throw new Error('Имейлът или паролата са грешни!');
        }

    } else {

        throw new Error('Имейлът или паролата са грешни!');

    }

}


module.exports = {
    register,
    login
}