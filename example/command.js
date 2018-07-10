'use strict';

const { Client } = require('../');

const client = new Client({
  url: `https://api-test.paxiq.com/pivot/1.0`,
  airline: `AIRLINE`,
  token: `TOKEN`
});

client.command(`*abc123`)
  .then((result) => {
    console.log(result.data.result.raw);
  })
  .catch((err) => console.log(`error ::`, err.response));
