const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/HomeController');
const loginController = require('./src/controllers/LoginController');

route.get('/', homeController.index);

route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);

module.exports = route;
