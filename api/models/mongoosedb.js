'use strict';
var mongoose = require('mongoose');
    
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:developersmean1!@news-shard-00-00-1ma7s.mongodb.net:27017/news_db?ssl=true&replicaSet=news-shard-0&authSource=admin');

var db = mongoose.connection;
db.on('error', function(err) {
  console.log('Error in Mongodb Connection ' + err);
});
db.once('open', function() {
  console.log('Mongodb Connected Successfully')
});

module.exports = mongoose;