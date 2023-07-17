const router = require('express').Router();
const { register, login } = require('../services/authService');

router.post('/login', async (req, res) => {

    try {

        const token = await login(req.body);

        res.cookie('auth', token);

        res.redirect('/');

    } catch (err) {

        res.render('auth/login', { err: err.message });

    }

});

router.post('/register', async (req, res) => {


    await register(req.body);

    res.send({s: true})

});

router.get('/logout', (req, res) => {

    res.clearCookie('auth');

    res.redirect('/');
});

module.exports = router;