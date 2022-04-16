const express = require('express');
const Blog = require("../controllers/BlogControllers");
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT');

// @route POST /
// @description add/save blogs
// @access Public
router.post('/blogs/new', verifyJWT, Blog.createBlog);

// @route GET /
// @description get all blogs
// @access Public
router.get('/blogs', Blog.fetchAllBlogs);

// @route GET /project/:id
// @description find single blog by id
// @access Public
router.get('/blogs/:id', Blog.fetchSingleBlog);

// @route PUT /blog/:id
// @description find single blog by id
// @access Public
router.put('/blogs/:id/edit', verifyJWT, Blog.updateSingleBlog);

// @route DELETE /blog/:id
// @description find single blog by id and delete
// @access Public
router.delete('/blogs/:id', verifyJWT, Blog.deleteSingleBlog);

module.exports = router;
