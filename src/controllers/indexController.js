const Project = require('../models/projects');

exports.addProjects = async (req, res) => {
  try {
    const { title } = req.body;
    const project = req.body;

    // Make sure this project doesn't already exist
    const newProject = await Project.findOne({ title });
      if (newProject) {
        return res
          .status(401)
          .json({ message: "This project already exists."});
      }

      // Create and save new project
      await new Project({
      url: project.url,
      image: project.image,
      title: project.title,
      role: project.role,
      brief: project.brief,
      techStack: project.techStack,
      projectLink: project.projectLink
    });

    if (project === "") {
      res.redirect('/');
    }

    await newProject.save();

    return res.status(200).json('Project saved');
  } catch (error) {
    console.log(error);
  }
}

exports.fetchAllProjects = async (req, res) => {
  try {
    let project = await Project.find();
    return res
      .status(200)
      .json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
  }
}

exports.fetchSingleProject = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);
    return res
      .status(200)
      .json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: 'The project you are looking for does not exist.'});
  }
}

exports.updateSingleProject = async (req, res) => {
  try {
    let updates = req.body;
    let project = await Project.findByIdAndUpdate(req.params.id, updates);
    return res
      .status(200)
      .json(`Project: ${project.title} was successfully updated` );
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: 'Unable to update at this time please try again.'});
  }
}
