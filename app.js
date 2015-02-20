var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.set('views', './views')
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'))

app.route('/')
  .get(function (req, res) {
    res.render('index')
  })
  .post(function (req, res) {
    res.send('Got a POST request')
  })

app.route('/user')
  .put(function (req, res) {
    res.send('Got a PUT request at /user')
  })
  .delete(function (req, res) {
    res.send('Got a DELETE request at /user')
  })

// app.all('/secret', function (req, res, next) {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })

app.use(function(err, req, res, next){
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

var server = app.listen(app.get('port'), function () {
  console.log('Node app running at http://localhost:%s', app.get('port'))
})
