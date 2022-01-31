exports.landingPage = async (req, res) => {
  try {
    res.send('Hello, World!');
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
  }
}
