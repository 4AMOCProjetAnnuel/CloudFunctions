const router = require('express').Router()

module.exports = (app) => {

  router.get('/test', (req, res) => {
    res.send('Hello World')
  })

  return router
}