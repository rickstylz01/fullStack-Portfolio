const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {expiresIn: 86400}, (err, decoded) => {
      if (err) return res.json({
        isLoggedIn: false,
        message: "Failed To Authenticate"
      })

      req.user = {};
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    })
  } else {
    res.json({message: "Incorrect Token Given", isLoggedIn: false})
  }
}
