var express = require('express')
var fs = require('fs')
var router = express.Router()

/* Frontpage Routes */
router.route('/')
  .get(function (req, res) {
    res.render('index')
  })
  .post(function (req, res) {
    res.send('Got a POST request')
  })

/* Comments JSON */
router.route('/comments.json')
  .get(function(req, res) {
    fs.readFile('_comments.json', function(err, data) {
      res.json(JSON.parse(data))
    })
  })

/* Hello World */
router.route('/hello')
  .get(function (req, res) {
    res.render('hello')
  })

module.exports = router
