const router = require('express').Router();
const userData = require('../services/userDataService');

router.get('/getImage/:username', async (req, res) => {

    const username = req.params.username;

    const data = await userData.getUserProfileImage(username);

    res.json(data.profileImage);

});

router.get('/:username', async ( req, res ) => {

    const user = await userData.getUserData(req.params.username);

    res.send(user);
});

module.exports = router;