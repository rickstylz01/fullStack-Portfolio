const express = require('express');
const Project = require('../controllers/ProjectControllers');
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT');


// @route POST /
// @description add/save project
// @access Public
router.post('/projects/new', Project.addProjects);

// @route GET /
// @description fetch all projects
// @access Public
router.get('/projects', Project.fetchAllProjects);

// @route GET /project/:id
// @description find single project by id
// @access Public
router.get('/projects/:id', Project.fetchSingleProject);

// @route PUT /project/:id
// @description find single project by id
// @access Public
router.put('/projects/:id/edit', Project.updateSingleProject);

// @route DELETE /project/:id
// @description find single project by id and delete
// @access Public
router.delete('/projects/:id', Project.deleteSingleProject);

module.exports = router;
