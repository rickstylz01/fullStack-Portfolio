require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();

app.use(cors({ origin: true, credential: true }));
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//=======================================================================
// DATABASE
//=======================================================================
const dbSetup = require('./config/dbSetup');
dbSetup();
//=======================================================================
// ROUTES
//=======================================================================
const homeRoute = require('./routes/ProjectRoutes');
app.use(homeRoute);

const blogs = require('./routes/BlogRoutes');
app.use(blogs);
//=======================================================================
// SERVER
//=======================================================================
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
