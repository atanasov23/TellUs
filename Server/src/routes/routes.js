const authController = require('../controllers/authController');
const userDataController = require('../controllers/userDataController');

const router = require('express').Router();

router.use(authController);

router.use(userDataController);

module.exports = router;