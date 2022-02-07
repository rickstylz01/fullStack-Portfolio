const express = require('express');
const Index = require('../controllers/indexController');
const router = express.Router();

router.get('/', Index.landingPage);

// @route POST /
// @description add/save project
// @access Public
router.post('/', Index.addProjects);

module.exports = router;
