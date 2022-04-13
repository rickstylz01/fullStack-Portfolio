const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const userLoggingIn = req.body;
  if (!userLoggingIn.username || !userLoggingIn.password) return res.status(400).json({ message: 'Username and password are required.'});

  const foundUser = await User.findOne({username: userLoggingIn.username}).exec();
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

    // Saving refreshToken with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);

    res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 }); // secure: true,
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
}

exports.logout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true});
    return res.sendStatus(204);
  }

  // Delete refreshToken in db
  foundUser.refreshToken = '';
  const result = await foundUser.save();
  console.log(result);
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true});
  return res.sendStatus(204);
}
