const authController = require('../controllers/authController');
const userDataController = require('../controllers/userDataController');
const publicationController = require('../controllers/publicationController');

const router = require('express').Router();

router.use(authController);

router.use(userDataController);

router.use(publicationController);

module.exports = router;