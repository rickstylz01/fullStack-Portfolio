require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const dbSetup = require('./config/dbSetup');
const app = express();
const homeRoute = require('./routes/ProjectRoutes');
const blogRoutes = require('./routes/BlogRoutes');
const userRoutes = require('./routes/UserRoutes');
const authRoutes = require('./routes/AuthRoutes');

app.use(cors({ origin: true, credential: true }));
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
