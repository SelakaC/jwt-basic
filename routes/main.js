const express = require('express');
const router = express.Router();
const authenticationMiddlware = require('../middleware/auth');

const {login,dashborad} = require('../controllers/main');

router.route('/dashboard').get(authenticationMiddlware,dashborad);
router.route('/login').post(login);

module.exports = router;