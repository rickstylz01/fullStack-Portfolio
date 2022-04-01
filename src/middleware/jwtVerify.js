const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  const token = req.header["x-access-token"]?.split(' ')[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
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

// possibly not the correct way of doing this
module.exports = verifyJWT;
