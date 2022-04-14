const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);
  console.log(authHeader);

  const token = authHeader.split(' ')[1];
  console.log(token);
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, decoded) => {
    if (err) return res.sendStatus(403);

    req.user.username = decoded.username;
    console.log(`REQ.USER.USERNAME ${req.user.username}`);
    next();
  })
}

module.exports = verifyJWT;
