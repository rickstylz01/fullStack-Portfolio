const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  link: String,
  image: String,
  title: String,
  role: String,
  brief: String,
  techStack: [String],
  projectLink: {
    to: String,
    text: String
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
