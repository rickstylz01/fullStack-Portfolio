const express = require('express');
const Index = require('../controllers/indexController');
const router = express.Router();

// @route GET /
// @description get landing page
// @access Public
router.get('/', Index.landingPage);

// @route POST /
// @description add/save project
// @access Public
router.post('/', Index.addProjects);

// @route POST /
// @description find single project by id
// @access Public
router.get('/project/:id', Index.fetchSingleProject);

module.exports = router;
