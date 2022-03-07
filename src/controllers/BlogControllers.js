const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  try {
    const { title } = req.body;

    // Make sure this blog doesn't already exist
    const blog = await Blog.findOne({ title });
    if (blog) {
      return res
        .status(401)
        .json({ message: "This project already exists."});
    }

    // Create and save new blog
    const newBlog = await new Blog({...req.body});

    if (newBlog === "") {
      res.redirect('/');
    }

    await newBlog.save();

    return res.status(200).json('Blog saved');
  } catch (error) {
    console.log(error);
  }
}

exports.fetchAllBlogs = async (req, res) => {
  try {
    let blogs = await Blog.find();
    console.log(res);
    console.log('ajkjkjkjkkj');
    return res
      .status(200)
      .json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
  }
}

exports.fetchSingleBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    return res
      .status(200)
      .json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: 'The project you are looking for does not exist.'});
  }
}

exports.updateSingleBlog = async (req, res) => {
  try {
    let updates = req.body;
    let blog = await Blog.findByIdAndUpdate(req.params.id, updates);

    return res
      .status(200)
      .json(`Project: ${blog.title} was successfully updated` );
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: 'Unable to update at this time please try again.'});
  }
}

exports.deleteSingleBlog = async (req, res) => {
  try {
    let blog = await Blog.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json(`${blog.title} was deleted.`);
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: 'Unable to delete the project at this time please try again.'});
  }
}
