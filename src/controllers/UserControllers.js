const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const user = req.body;
  if (!user) return res.status(400).json({ message: 'Username and password are required'});

  const takenUsername = await User.findOne({username: user.username}).exec();
  if (takenUsername) res.sendStatus(409);

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const dbUser = await User.create({
      username: user.username.toLowerCase(),
      password: hashedPassword,
    });

    console.log(dbUser);

    res.json({'success': `New user ${user.username} created!`});
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
}
