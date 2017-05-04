'use strict';
module.exports = function(app) {
    var userInfoList = require('../controllers/user-info-controller');

    //userInfoList Routes
    app.route('/users')
        .get(userInfoList.getUsers)
        .post(userInfoList.createUser);

    app.route('/users/:userId')
        .get(userInfoList.getUserById)
        .put(userInfoList.updateUserById)
        .patch(userInfoList.updateSpecifiedUserPropertyById)
        .delete(userInfoList.deleteUserById);
};