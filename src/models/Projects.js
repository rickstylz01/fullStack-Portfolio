const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  imageUrl: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  techStack: {
    type: [String]
  },
  projectLink: {
    type: String
  }
}, {timestamps: true});

module.exports = mongoose.model('Project', ProjectSchema);
