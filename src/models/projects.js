const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  url: String,
  image: String,
  title: String,
  role: String,
  brief: String,
  techStack: [String],
  projectLink: {
    to: String,
    text: String
  }
}, {timestamps: true});

module.exports = mongoose.model('Project', ProjectSchema);
