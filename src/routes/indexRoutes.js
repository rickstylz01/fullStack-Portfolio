const express = require('express');
const router = express.Router();
const Index = require('../controllers/indexController');
const Project = require('../models/projects');


router.get('/', Index.landingPage);

// @route POST /
// @description add/save project
// @access Public
router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create({
      url: req.body.url,
      image: req.body.image,
      title: req.body.title,
      role: req.body.role,
      brief: req.body.brief,
      techStack: req.body.techStack,
      projectLink: req.body.projectLink
    });
    return res.status(200).json(`Project ${newProject.title} has been saved.`);
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
  }
})

module.exports = router;
