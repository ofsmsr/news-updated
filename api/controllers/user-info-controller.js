'use strict';

var UserInfo = require('../models/user-info-model'),
    Utils = require('../utils/utils'),
    Common = require('../common/common').common;

exports.getUsers = function getUsers(req, res) {
    UserInfo.find({}, function (err, userInfo) {
        Utils.sendResponse({
            err: err,
            res: res,
            dbResponse: userInfo,
            operation: Common.OPERATIONS.READ,
            module: Common.MODULES.USERINFO
        });
    });
};

exports.createUser = function createUser(req, res) {
    var obj = new UserInfo(req.body);
    obj.save(function(err, userInfo) {
        Utils.sendResponse({
            err: err,
            res: res,
            dbResponse: userInfo,
            operation: Common.OPERATIONS.CREATE,
            module: Common.MODULES.USERINFO
        });
    });
};

exports.getUserById = function getUserById(req, res) {
    UserInfo.findById({_id: req.params.userId}, function (err, userInfo) {
        Utils.sendResponse({
            err: err,
            res: res,
            dbResponse: userInfo,
            operation: Common.OPERATIONS.READ,
            module: Common.MODULES.USERINFO
        });
    });
};

exports.updateUserById = function updateUserById(req, res) {
    UserInfo.findByIdAndUpdate({_id: req.params.userId}, req.body, {new: true}, function (err, userInfo) {
        Utils.sendResponse({
            err: err,
            res: res,
            dbResponse: userInfo,
            operation: Common.OPERATIONS.UPDATE,
            module: Common.MODULES.USERINFO
        });
    });
};

exports.updateSpecifiedUserPropertyById = function updateSpecifiedUserPropertyById(req, res) {
    UserInfo.update({_id: req.params.userId}, {$set: req.body}, function (err, userInfo) {
        Utils.sendResponse({
            err: err,
            res: res,
            dbResponse: userInfo,
            operation: Common.OPERATIONS.UPDATE,
            module: Common.MODULES.USERINFO
        });
    });
};

exports.deleteUserById = function deleteUserById(req, res) {
    UserInfo.remove({_id: req.params.userId}, function (err, userInfo) {
        Utils.sendResponse({
            err: err,
            res: res,
            dbResponse: userInfo,
            operation: Common.OPERATIONS.DELETE,
            module: Common.MODULES.USERINFO
        });
    });
};