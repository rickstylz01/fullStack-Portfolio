const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  publishDate: {
    type: Date
  },
  imageUrl: {
    type: String
  }
}, {timestamps: true});

module.exports = mongoose.model('Blog', BlogSchema);
