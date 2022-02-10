const express = require('express');
const Index = require('../controllers/indexController');
const router = express.Router();

// @route POST /
// @description add/save project
// @access Public
router.post('/', Index.addProjects);

// @route GET /
// @description get landing page
// @access Public
router.get('/', Index.fetchAllProjects);

// @route POST /project/:id
// @description find single project by id
// @access Public
router.get('/project/:id', Index.fetchSingleProject);

// @route PUT /project/:id
// @description find single project by id
// @access Public
router.put('/project/:id', Index.updateSingleProject);

module.exports = router;
