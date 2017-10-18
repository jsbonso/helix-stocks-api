var express = require('express');
var router = express.Router();
var http = require("https");

var request = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Helix Stocks API' });
});

/**
 *
 * A simple Endpoint for the Helix Stock Management App
 * that connects to the Bloomberg API, as bloomberg doesn't
 * have CORS on its web services.
 *
 * @author: Jon Bonso
 */
router.get('/query', function(req, res, next) {

   request({
    "method":"GET",
    "uri": 'https://www.bloomberg.com/markets/watchlist/recent-ticker/' + req.query.stockTicker + ':US',
    "json": true,
  }).then(function (data) {
     res.send(data);
   })
    .catch(function (err) {
      res.send('There was a problem accessing the API. Please try again.');
    });

});

module.exports = router;
