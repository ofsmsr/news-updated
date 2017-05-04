'use strict';

var Login = require('../models/login-model'),
    Utils = require('../utils/utils'),
    Common = require('../common/common').common;

exports.doLogin = function doLogin(req, res) {
    var obj = req.body;
    Login.find(obj, function (err, loginResponse) {
        Utils.sendLoginResponse({
            err: err,
            res: res,
            dbResponse: loginResponse,
            operation: Common.OPERATIONS.READ,
            module: Common.MODULES.LOGIN
        });
    });
};