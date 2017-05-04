'use strict';

var response = {
    content: '',
    message: ''
};

exports.sendResponse = function sendResponse(param) {
    var msg = param.module + ' ' + param.operation + ' Successfully';
    response.content = param.dbResponse,
    response.message = msg;

    if (param.err) {
        var strLimit = (param.operation === Common.OPERATIONS.READ) ? (param.operation.length -2) : (param.operation.length -1);
        msg = 'Unable to ' + param.operation.substr(0, strLimit) + ' ' + param.module;
        response.content = param.error;
        response.message = msg;
        console.log('ERROR: ' + param.module + ' Module => ' +param.error);
    }

    param.res.json(response);
};

exports.sendLoginResponse = function sendLoginResponse(param) {
    response.content = [];
    response.message = param.module + ((param.dbResponse && param.dbResponse.length) ? ' Successfull' : 'Username or Password wrong');
    if (param.err) {
        response.content = param.error;
    }
    param.res.json(response);
};