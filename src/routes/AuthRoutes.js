const express = require('express');
const router = express.Router();
const Auth = require('../controllers/AuthControllers');
const RefToken = require('../controllers/refreshTokenController');

router.post('/login', Auth.login);

router.get('/logout', Auth.logout);

router.get('/refresh', RefToken.handleRefreshToken);

module.exports = router;
