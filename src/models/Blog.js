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
  updateDate: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
