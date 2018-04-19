const functions = require('firebase-functions');
const app = require('express')()

require('./route')(app)

//app.use('register', require('./register')(app))

let server = functions.https.onRequest(app)

module.exports = {
  server
}