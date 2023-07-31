const router = require('express').Router();
const userData = require('../services/userDataService');
const fs = require('fs');
const bcrypt = require('bcrypt');

router.get('/getImage/:username', async (req, res) => {

    const username = req.params.username;

    const data = await userData.getUserProfileImage(username);

    res.json(data.profileImage);

});

router.get('/:username', async (req, res) => {

    const user = await userData.getUserData(req.params.username);

    res.send(user);
});

router.post('/add/:userId', async (req, res) => {

    const file = req.files.image;

    const userId = req.params.userId;

    try {

        const imageName = await userData.updateUserImage(file.name, userId);

        file.mv(`./src/public/usersProfileImage/${file.name}`);

        res.status(200).send({
            message: "Снимката е добавена.",
            image: imageName.profileImage
        });

    } catch (err) {

        res.send({ message: "Снимката не е добавена! Моля опитайте отново." });
    }

});

router.post('/user/edit/:id', async (req, res) => {

    const filteredData = {}

    for (const prop in req.body) {
        if (req.body[prop] !== '') {
            if (prop === 'password' && prop !== '') {
                filteredData[prop] = await bcrypt.hash(req.body[prop], 10);
            } else {
                filteredData[prop] = req.body[prop]
            }

        }
    }

    try {
        await userData.updateUserData(req.params.id, filteredData);
        res.send({ message: "Промените са запазени успешно." });
    } catch (err) {

        res.send({ message: "Промените не се запазиха! Моля опитайте отново." });
    }


});

router.post('/edit/:userId', async (req, res) => {

    const file = req.files.image;

    const userId = req.params.userId;

    try {
        const getOldImage = await userData.getOldImageName(userId);

        fs.unlink(`./src/public/usersProfileImage/${getOldImage.profileImage}`, (err) => { });

        const imageName = await userData.updateUserImage(file.name, userId);

        file.mv(`./src/public/usersProfileImage/${file.name}`);

        res.status(200).send({
            message: "Снимката е добавена.",
            image: imageName.profileImage
        });

    } catch (err) {

        res.send({ message: "Снимката не е добавена! Моля опитайте отново." });
    }

});

router.post('/delete', async (req, res) => {

    const data = req.body;

    try {
        await userData.deleteImage(data);

        fs.unlink(`./src/public/usersProfileImage/${data.imageName}`, (err) => { });

        res.send({ message: "Снимката е изтрита." });
    } catch (err) {

        res.send({ message: "Снимката не беше изтрита! Моля опитайте отново." });
    }

});

/* router.post('/getMyNotification/:id', async  (req,res) => {

    const result = await userData.getMyNotification(req.params.id, req.body)

    const response = result.notification;

    res.json(response);
}) */

module.exports = router;