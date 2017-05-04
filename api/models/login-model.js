'use strict';
var db = require('./mongoosedb');

var LoginSchema = new db.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    createdBy: {
        type: String
    },
    updatedBy: {
        type: String
    }
},{
    collection: 'login_col'
});

module.exports = db.model('Login', LoginSchema);