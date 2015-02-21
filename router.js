var express = require('express')
var router = express.Router()

/* Frontpage Routes */
router.route('/')
  .get(function (req, res) {
    res.render('index')
  })
  .post(function (req, res) {
    res.send('Got a POST request')
  })

/* Hello World */
router.route('/hello')
  .get(function (req, res) {
    res.render('hello')
  })

module.exports = router
