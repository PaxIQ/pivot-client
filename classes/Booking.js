'use strict';

const debug = require('debug')(`pivot-client/classes/Booking.js`);
const _ = require('lodash');

class Booking {
  constructor(data) {
    debug(`new booking`);

    Object.assign(this, { data });
  }

  findPassenger(passengerNumber) {
    return _.find(this.data.passengers, { passengerNumber });
  }

  findSegment(segmentNumber) {
    return _.find(this.data.segments, { segmentNumber });
  }

  findContacts(passengerNumber) {
    return _.filter(this.data.contacts, { passengerNumber });
  }

  findTicketsForPassenger(passengerNumber) {
    return _.filter(this.data.tickets, { passengerNumber });
  }

  findTicketsForSegment(segmentNumber) {
    return _.filter(this.data.tickets, { segmentNumber });
  }

  findFactsForPassenger(passengerNumber) {
    return [].concat(
      _.filter(this.data.apfax, { passengerNumber }),
      _.filter(this.data.genfax, { passengerNumber })
    );
  }

  findFactsForSegment(segmentNumber) {
    return [].concat(
      _.filter(this.data.apfax, { segmentNumber }),
      _.filter(this.data.genfax, { segmentNumber })
    );
  }

  findFareStoreForPassenger(passengerNumber) {
    const fareStore = _.find(this.data.fareQuote.fareStores, { passengerNumber });

    return fareStore.segmentFS.map((store) =>
      Object.assign({}, store, { passengerNumber }));
  }

  findFareQuoteForSegment(segmentNumber) {
    return _.filter(this.data.fareQuote.fqItins, { segmentNumber });
  }

  findFareStoreForSegment(segmentNumber) {
    return this.data.fareQuote.fareStores
      .reduce((stores, store) => {
        const seg = _.find(store.segmentFS, { segmentNumber });

        if (seg)
          stores.push(Object.assign({}, { passengerNumber: store.passengerNumber }, seg ));

        return stores;
      }, []);
  }

  passengerProfile(passengerNumber) {
    const passenger = this.findPassenger(passengerNumber);
    const segments = this.data.segments;
    const tickets = this.findTicketsForPassenger(passengerNumber);
    const fareStores = this.findFareStoreForPassenger(passengerNumber);
    const contacts = this.findContacts(passengerNumber);
    const facts = this.findFactsForPassenger(passengerNumber);

    return Object.assign({}, passenger, { segments, tickets, fareStores, contacts, facts });
  }

  segmentProfile(segmentNumber) {
    const segment = this.findSegment(segmentNumber);
    const tickets = this.findTicketsForSegment(segmentNumber);
    const facts = this.findFactsForSegment(segmentNumber);
    const fareStores = this.findFareStoreForSegment(segmentNumber);

    return Object.assign({}, { segment, tickets, facts, fareStores });
  }
}

debug(`exporting...`);

module.exports = Booking;
