const express = require('express');
const router = express.Router();
const User = require('../controllers/UserControllers');

// POST request to register a user
router.post('/register', User.registerUser);
