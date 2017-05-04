'use strict';
module.exports = function(app) {
    var login = require('../controllers/login-controller');

    //login Routes
    app.route('/login')
        .post(login.doLogin);
    
};