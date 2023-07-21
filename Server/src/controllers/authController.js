const router = require('express').Router();
const { register, login } = require('../services/authService');


router.post('/login', async (req, res) => {

    try {

        const token = await login(req.body);

        res.cookie('auth', token);

        res.send(token);

    } catch (err) {

        res.status(401).json({
            message: err.message,
            status: false
        })
    }

});

router.post('/register', async (req, res) => {

    try {
        await register(req.body);
        res.send({
            status: true
        }).status(200);
    } catch (err) {
        res.status(401).json({
            message: 'Нещо се обърка! Моля, опитайте отново.',
            status: false
        })
    }
});

module.exports = router;