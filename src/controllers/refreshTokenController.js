const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || foundUser.username !== decoded.username) return res.sendStatus(403);

      const accessToken = jwt.sign(
        {
          "UserInfo": {
            "username": decoded.username,
          }
        },
        process.env.JWT_SECRET,
        {expiresIn: '30s'}
      );
      res.json({ accessToken })
    }
  );
}

module.exports = { handleRefreshToken }
