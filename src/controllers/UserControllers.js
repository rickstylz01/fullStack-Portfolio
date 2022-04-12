const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const user = req.body;
  if (!user) return res.status(400).json({ message: 'Username and password are required'});

  const takenUsername = await User.findOne({username: user.username}).exec();
  if (takenUsername) res.sendStatus(409);

  try {
    user.password = await bcrypt.hash(user.password, 10);

    const dbUser = await User.create({
      username: user.username.toLowerCase(),
      email: user.email,
      password: user.password
    });

    console.log(dbUser);
    res.json({message: "Success"});
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
}
