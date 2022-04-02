const express = require('express');
const router = express.Router();
const User = require('../controllers/UserControllers');
const validate = require('../middleware/jwtVerify');

// POST request to register a user
router.post('/register', User.registerUser);

// GET request to retrieve user data
router.get('/getUsername', validate, (req, res) => {
  res.json({isLoggedIn: true, username: req.user.username});
})

module.exports = router;
