'use strict';
var db = require('./mongoosedb');

var UserInfoSchema = new db.Schema({
    firstName: {
        type: String,
        Required: 'Kindly enter the first name'
    },
    lastName: {
        type: String,
        Required: 'Kindly enter the last string'
    },
    dateOfBirth: {
        type: String,
        Required: 'Kindly enter the DOB'
    },
    email: {
        type: String,
        Required: 'Kindly enter the email'
    },
    phone: {
        type: Number,
        Required: 'Kindly enter the phone number'
    },
    address: {
        type: String,
        Required: 'Kindly enter the address'
    },
    createdBy: {
        type: String,
        Required: 'Kindly enter the string'
    },
    updatedBy: {
        type: String,
        Required: 'Kindly enter the updated'
    }
},{
    collection: 'userinfo_col'
});

module.exports = db.model('UserInfo', UserInfoSchema);