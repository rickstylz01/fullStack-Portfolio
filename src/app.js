require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();

app.use(cors({ origin: true, credential: true }));
// parse application/json
app.use(express.json({ extended: false }));
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
const homeRoute = require('./routes/indexRoutes');
app.use(homeRoute);

const blogs = require('./routes')
app.use('/blogs', blogs);
//=======================================================================
// SERVER
//=======================================================================
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
