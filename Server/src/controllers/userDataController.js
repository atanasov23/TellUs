const router = require('express').Router();
const userData = require('../services/userDataService');

router.get('/getImage/:username', async (req, res) => {

    const username = req.params.username;

    const data = await userData.getUserProfileImage(username);

    res.json(data.profileImage);

})

module.exports = router;