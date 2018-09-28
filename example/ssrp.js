'use strict';

const { Client } = require('../');

const client = new Client({
  url: `https://api-test.paxiq.com/pivot/1.0`,
  airline: `AIRLINE`,
  token: `TOKEN`
});

client.ssrp(`list`)
  .then((response) => {
    console.log(response.data.result);
  })
  .catch((err) => console.log(`error ::`, err.response));
