const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const user = req.body;

    const takenUsername = await User.findOne({username: user.username});
    const takenEmail = await User.findOne({email: user.email});

    if (takenUsername || takenEmail) {
      res.json({message: 'Username or email has already been taken'});
    }

    user.password = await bcrypt.hash(req.body.password, 10);

    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email,
      password: user.password,
      admin: user.admin,
      firstName: user.firstName,
      lastName: user.lastName
    });

    dbUser.save();
    res.json({message: "Success"});
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
}
