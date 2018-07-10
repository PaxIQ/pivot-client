'use strict';

const debug = require('debug')(`pivot-client/classes/index.js`);

const Booking = require('./Booking');
const Availability = require('./Availability');

const classes = {
  Booking,
  Availability
};

debug(`exporting...`);

module.exports = classes;
