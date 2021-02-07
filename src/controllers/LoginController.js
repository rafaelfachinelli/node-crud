const Login = require('../models/Login');

exports.index = (req, res) => {
  res.render('login');
};

exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();
    
    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('/login/index');
      });
      return;
    }
    
    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(function() {
      return res.redirect('/login/index');
    });
    return;
  } catch (error) {
    console.error(error);
    return res.render('404');
  }
};

exports.login = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.login();
    
    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('/login/index');
      });
      return;
    }
    
    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(function() {
      return res.redirect('/login/index');
    });
    return;
  } catch (error) {
    console.error(error);
    return res.render('404');
  }
};
