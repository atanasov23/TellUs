const bcrypt = require('bcrypt');
const User = require('../models/user');
const SECRET = 'awf232daw343gse32gsgs3223gshh';
const myUtils = require('../utils/util');

const register = async (data) => {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    User.create({
        username: data.username,
        email: data.email,
        password: hashedPassword
    });
}

const login = async (data) => {

    const user = await User.findOne({ username: data.email });

    if (user) {

        const decryptPassword = await bcrypt.compare(data.password, user.password);

        if (decryptPassword) {

            const payload = {
                _id: user._id,
                username: user.username,
                email: user.email
            }

            const jwt = await myUtils.jwpPromises.sign(payload, SECRET);

            return jwt;

        } else {

            throw new Error('Email or password is incorrect');
        }

    } else {

        throw new Error('Email or password is incorrect');

    }

}


module.exports = {
    register,
    login
}