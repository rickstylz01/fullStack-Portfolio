require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
