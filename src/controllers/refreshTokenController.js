const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) return res.sendStatus(403);

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || foundUser.username !== decoded.username) return res.sendStatus(403);

      const accessToken = jwt.sign(
        { "username": decoded.username },
        process.env.JWT_SECRET,
        {expiresIn: '1d'}
      );
      res.json({ accessToken })
    }
  );
}

module.exports = { handleRefreshToken }
