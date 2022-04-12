const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const userLoggingIn = req.body;
  if (!userLoggingIn.username || !userLoggingIn.password) return res.status(400).json({ message: 'Username and password are required.'});

  const foundUser = await User.findOne({username: userLoggingIn.username});
  if (!foundUser) return res.sendStatus(401);

  const match = await bcrypt.compare(userLoggingIn.password, foundUser.password);
  if (match) {
    const accessToken = jwt.sign(
      { "username": foundUser.username },
      process.env.JWT_SECRET,
      { expiresIn: '30s'}
    );
    const refreshToken = jwt.sign(
      { "username": foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d'}
    );
    res.json({ 'success': `User ${foundUser.username} is logged in!`});
  } else {
    res.sendStatus(401);
  }
}
