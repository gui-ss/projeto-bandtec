const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const router = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(express.static('public'));

module.exports = app;