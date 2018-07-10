'use strict';

const { Client } = require('../');

const client = new Client({
  url: `https://api-test.paxiq.com/pivot/1.0`,
  airline: `AIRLINE`,
  token: `TOKEN`
});

client.booking(`abc123`)
  .then((result) => {
    const { booking } = result.data.result;

    console.log(booking.passengerProfile(1));
  })
  .catch((err) => console.log(`error ::`, err.response));
