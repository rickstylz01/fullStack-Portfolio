const express = require('express');
const router = express.Router();
const Index = require('../controllers/indexController');

router.get('/', Index.landingPage);

module.exports = router;
