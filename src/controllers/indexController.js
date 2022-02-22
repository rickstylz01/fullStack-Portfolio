const Project = require('../models/Projects');

exports.addProjects = async (req, res) => {
  try {
    const { title } = req.body;

    // Make sure this project doesn't already exist
    const project = await Project.findOne({ title });
    if (project) {
      return res
        .status(401)
        .json({ message: "This project already exists."});
    }

    // Create and save new project
    const newProject = await new Project({...req.body});

    if (newProject === "") {
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

exports.deleteSingleProject = async (req, res) => {
  try {
    let project = await Project.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json(`${project.title} was deleted.`);
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: 'Unable to delete the project at this time please try again.'});
  }
}
