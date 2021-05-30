const express = require('express');
const cors = require('cors');
const repositoriesController = require('./controllers/repositories');

const app = express();

app.use(cors());
app.use('/', repositoriesController.getRepositories);

module.exports = app;
