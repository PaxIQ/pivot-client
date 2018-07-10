'use strict';

const debug = require('debug')(`pivot-client/classes/Availability.js`);
// const _ = require('lodash');

class Availability {
  constructor(data) {
    // data should be an array,
    Object.assign(this, { data });
  }
}

debug(`exporting...`);

module.exports = Availability;
