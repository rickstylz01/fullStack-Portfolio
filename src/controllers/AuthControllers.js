const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const userLoggingIn = req.body;

  User.findOne({username: userLoggingIn.username})
    .then(dbUser => {
      if (!dbUser) {
        return res.status(402).json({
          message: "Invalid Username or Password."
        });
      }

      bcrypt.compare(userLoggingIn.password, dbUser.password)
        .then(isCorrect => {
          if (isCorrect) {
            const payload = {
              id: dbUser._id,
              username: dbUser.username,
              admin: dbUser.admin,
            }

            jwt.sign(
              payload,
              process.env.JWT_SECRET,
              {expiresIn: 86400},
              (err, token) => {
                if (err) return res.status(404).json({message: err})
                return res.status(200).json({
                  message: "Success",
                  token: "Bearer " + token
                });
              }
            )
          } else {
            return res.status(401).json({
              message: "Invalid Username or Password"
            });
          }
        })
    })
}
