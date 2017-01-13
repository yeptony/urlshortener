var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('link-to-mongodb', function(err, database) {

})

app.get('/', function (req, res) {
  res.end("Hello world again!")
})

app.listen(process.env.PORT || 3000, function () {
  console.log('App running!')
})
