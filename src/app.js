require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const clientURL = process.env.CLIENT_SIDE_URL;
const cors = require('cors');
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

app.use(cors(corsOptions));
app.options('*', cors());
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
