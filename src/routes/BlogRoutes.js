const express = require('express');
const Blog = require('../models/Blog');
const Index = require("../controllers/indexController");
const router = express.Router();

// @route POST /
// @description add/save blogs
// @access Public
router.post('/', Index.createBlog);

// @route GET /
// @description get all blogs
// @access Public
router.get('/', Index.fetchAllBlogs);

// @route GET /project/:id
// @description find single blog by id
// @access Public
router.get('/blog/:id', Index.fetchSingleBlog);

// @route PUT /blog/:id
// @description find single blog by id
// @access Public
router.put('/blog/:id', Index.updateSingleBlog);

// @route DELETE /blog/:id
// @description find single blog by id and delete
// @access Public
router.delete('/blog/:id', Index.deleteSingleBlog);

module.exports = router;
