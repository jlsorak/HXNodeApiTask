var express = require('express');
var app = express();
var db = require('./db');
var UserController = require('./user/UserController');

// Link the user controller to the route /users
app.use('/users', UserController);

module.exports = app;
