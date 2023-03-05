require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8082;
const clientURL = process.env.CLIENT_SIDE_URL;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dbSetup = require('./config/dbSetup');
const homeRoute = require('./routes/ProjectRoutes');
const blogRoutes = require('./routes/BlogRoutes');
const userRoutes = require('./routes/UserRoutes');
const authRoutes = require('./routes/AuthRoutes');

const corsOptions = {
  origin: `${clientURL}`,
  credentials: true,
  optionsSuccessStatus:200
}

// set the Access-Control-Allow-Origin header
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors(corsOptions));
app.options('*', cors());
// middleware for cookies
app.use(cookieParser());
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//=======================================================================
// DATABASE
//=======================================================================
dbSetup();
//=======================================================================
// ROUTES
//=======================================================================
app.use(homeRoute);
app.use(blogRoutes);
app.use(userRoutes);
app.use(authRoutes);
//=======================================================================
// SERVER
//=======================================================================
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
