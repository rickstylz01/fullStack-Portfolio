require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

//=======================================================================
// DATABASE
//=======================================================================
const dbSetup = require('./config/dbSetup');
dbSetup();

//=======================================================================
// ROUTES
//=======================================================================
const homeRoute = require('./routes/indexRoutes');
app.use(homeRoute);
//=======================================================================
// SERVER
//=======================================================================
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
