const Project = require('../models/projects');

exports.landingPage = async (req, res) => {
  try {
    await Project.find();
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
  }
}
