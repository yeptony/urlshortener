var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient

var url = process.env.MONGOLAB_URI;
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
    db.close();
  }
});

app.get('/', function (req, res) {
  res.end("Hello world again!")
})

app.listen(process.env.PORT || 3000, function () {
  console.log('App running!')
})
