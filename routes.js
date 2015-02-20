var express = require('express')
var router = express.Router()

/* GET home page. */
router.route('/')
  .get(function (req, res) {
    res.render('index')
  })
  .post(function (req, res) {
    res.send('Got a POST request')
  })

module.exports = router
