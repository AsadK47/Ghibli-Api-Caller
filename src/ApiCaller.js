'use strict';

if (typeof fetch !== 'function') {
  global.fetch = require('node-fetch-polyfill');
} else {
  console.log('Fetch failed!')
}

const url = 'https://ghibliapi.herokuapp.com/films';
fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
