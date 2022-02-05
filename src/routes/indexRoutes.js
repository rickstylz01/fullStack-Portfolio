const express = require('express');
const Index = require('../controllers/indexController');
const Project = require('../models/projects');
const router = express.Router();

router.get('/', Index.landingPage);

// @route POST /
// @description add/save project
// @access Public
router.post('/', async (req, res) => {
  // console.log(`this is the req body: ${req.body}`);
  const { project } = req.body;
  try {
    const newProject = await new Project({
      url: project.url,
      image: project.image,
      title: project.title,
      role: project.role,
      brief: project.brief,
      techStack: project.techStack,
      projectLink: project.projectLink
    });

    if(project === "") {
      res.redirect('/');
    }

    await newProject.save();
    res.redirect('/');

    return res.status(200).json(`Project: ${newProject.title}, has been saved.`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
