const authController = require('../controllers/authController');

const router = require('express').Router();

router.use(authController);

module.exports = router;