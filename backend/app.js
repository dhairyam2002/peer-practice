const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();


dotenv.config({path : 'backend/config/config.env'});

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());

const notesRoutes = require('./routes/notesRoutes');
const exp = require('constants');

app.use("/api/v1", notesRoutes);

module.exports = app;