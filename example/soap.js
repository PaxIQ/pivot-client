'use strict';

const { Client } = require('../');

const client = new Client({
  url: `https://api-test.paxiq.com/pivot/1.0`,
  airline: `AIRLINE`,
  token: `TOKEN`
});

const xml = `<xml>
  <zflt command="schedule" action="create" confirm="1">
    <filter
      id=""
      city1="ABC"
      city2="DEF"
      fltno="DA2400"
      fltgroup=""
      start="2018-10-07"
      stop="2018-10-07"
      aircrafttype=""
      mo="0"
      tu="0"
      we="0"
      th="0"
      fr="0"
      sa="0"
      su="1"/>
    <flights>
      <flight
        flight=""
        seatplanname="HIJ"
        dcsprofile="Default"
        flightfarecode=""
        operatingfltno=""
        nesting=""
        pnltime=""
        pnltime2=""
        pnx1hours=""
        pnx2hours=""
        pnx3hours=""
        pnx4hours="">
        <classes>

        </classes>
        <legs>
          <leg
            no="1"
            arrivetime=""
            city="ABC"
            departtime="15:00"
            NoPax="0"/>
          <leg
            no="2"
            arrivetime="16:15"
            city="DEF"
            departtime=""
            NoPax="0"/>
        </legs>
        <restrictions>
          <restriction
            depart="ABC"
            arrive="DEF"
            nopax="0">
            <caps>

            </caps>
          </restriction>
        </restrictions>
      </flight>
    </flights>
  </zflt>
</xml>
`;

client.soap(xml)
  .then((response) => {
    console.log(response.data.result);
  })
  .catch((err) => console.log(`error ::`, err.response));
