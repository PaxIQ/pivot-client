'use strict';

const debug = require('debug')(`pivot-client/index.js`);
const axios = require('axios');
const classes = require('./classes');

class Client {
  constructor(options) {
    const { url, airline, token } = options;

    if (!url)
      throw new Error(`You must provide an 'url' property.`);
    else if (!airline)
      throw new Error(`You must provide an 'airline' property.`);
    else if (!token)
      throw new Error(`You must provide an 'token' property.`);

    // this.options = { url, airline, token };
    this._axios = axios.create({
      baseURL: url,
      headers: {
        'Videcom-Airline': airline,
        'Videcom-Token': token
      }
    });
  }

  booking(rloc) {
    if (!rloc)
      throw new Error(`You must provide a RLOC.`);

    return this._axios
      .get(`booking/${rloc}`)
      .then((response) => {
        if (response && response.data && response.data.result && response.data.result.booking)
          response.data.result.booking = new classes.Booking(response.data.result.booking);

        return response;
      });
  }

  availability(params) {
    if (!params. date)
      throw new Error(`You must provide a 'date' value`);
    else if (!params. depart)
      throw new Error(`You must provide a 'depart' value`);
    else if (!params. arrive)
      throw new Error(`You must provide a 'arrive' value`);
    else if (!params. passengers)
      throw new Error(`You must provide a 'passengers' value`);

    return this._axios
      .get(`availability`, { params })
      .then((response) => {
        if (response && response.data && response.data.result && response.data.result.availability)
          response.data.result.availability = new classes.Availability(response.data.result.availability);

        return response;
      });
  }

  command(command) {
    if (!command || typeof command !== `string`)
      throw new Error(`You must provide a command string`);

    return this._axios
      .post(`command`, { command });
  }
}

debug(`exporting...`);

module.exports = {
  Client
};
