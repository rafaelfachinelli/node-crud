const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/HomeController');
const loginController = require('./src/controllers/LoginController');
const contatoController = require('./src/controllers/ContatoController');

const { loginRequired } = require('./src/middlewares/middleware');

route.get('/', homeController.index);

route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.edit);

module.exports = route;
