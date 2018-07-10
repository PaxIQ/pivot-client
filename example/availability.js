'use strict';

const { Client } = require('../');

const client = new Client({
  url: `https://api-test.paxiq.com/pivot/1.0`,
  airline: `AIRLINE`,
  token: `TOKEN`
});

const query = {
  date: new Date(),
  depart: `PDX`,
  arrive: `LAX`,
  passengers: 1
};

client.availability(query)
  .then((result) => {
    const { availability } = result.data.result;

    console.log(availability.data[0]);
  })
  .catch((err) => console.log(`error ::`, err));
