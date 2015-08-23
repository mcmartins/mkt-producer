"use strict";

var request = require('request'),
  config = require(process.env.MKT_CONFIG_FILE),
  countries = require('./lib/list.json'),
  options = {
    uri: ['http://', config.CONSUMER.HOST, ':', config.CONSUMER.PORT, '/mkt/api/v1/messages'].join(''),
    method: 'POST'
  };

setInterval(function () {
  var index1 = Math.floor(Math.random() * (59));
  var index2 = Math.floor(Math.random() * (59));

  options.json = {
    "userId": Math.floor(Math.random() * (999) + 1),
    "currencyFrom": countries[index1].currency,
    "currencyTo": countries[index2].currency,
    "amountSell": Math.floor(Math.random() * (9999) + 1),
    "amountBuy":  Math.floor(Math.random() * (9999) + 1),
    "rate": countries[index1].currency === countries[index2].currency ? 1 : Math.random() * (3) + 1,
    "timePlaced": new Date().toJSON(),
    "originatingCountry": countries[index1].country
  };

  request(options, function (error, response, body) {
    if (error) {
      console.log(error);
    }
  });
}, config.PRODUCER.INTERVAL);
