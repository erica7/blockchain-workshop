'use strict';
const B = require('bluebird');
const expect = require('chai').expect;
const rp = require('request-promise');

const BrewHttp = require('./brewhttp');

describe('BrewHttp', () => {
  const messageDelay = 50; // (ms) Wait to make sure messages get sent
  it('should start an http server and build a block chain', () => {
    const port = 3010;
    const data = 'apples';

    // TODO: Create new server, start it
    const brewServer = {};

    return rp({
      uri: `TODO`, // TODO: Get chain
      json: true
    })
    .then((brews) => {
      expect(brews).to.have.property('length', 1);
      expect(brews[0]).to.have.property('data', 'our genesis data');

      // TODO: Add ${data} to the block chain
      return rp(`TODO`)
    })
    .then(() => rp({
      uri: `TODO`, // TODO: get chain again
      json: true
    }))
    .then((brews) => {
      expect(brews).to.have.property('length', 2);
      expect(brews[1]).to.have.property('data', data);
    })
    .finally(() => {
      // TODO: Stop server

      return B.delay(messageDelay);
    });
  });

  it('should start 2 different http servers and they should stay current with each other', () => {
    const port1 = 3010;
    const port2 = 3020;
    const data1 = 'apples';
    const data2 = 'oranges';

    // TODO: Create 2 servers, start them
    const brewServer1 = {};
    const brewServer2 = {};



    return rp(`TODO`) // TODO: Add data1 to server1 block chain
    .then( () => B.delay(messageDelay))
    .then(() => rp(`TODO`)) // TODO: Add server 2 as peer to server 1
    .delay(messageDelay)
    .then(() => rp(`TODO`)) // TODO: Add data2 to either server's block chain
    .delay(messageDelay)
    .then(() => B.join( // TODO: get chains from both servers
      rp({
        uri: `TODO`,
        json: true
      }),
      rp({
        uri: `TODO`,
        json: true
      })
    ))
    .spread((chain1, chain2) => {
      expect(chain1, 'chain1 length').to.have.property('length', 3);
      expect(chain2, 'chain2 length').to.have.property('length', 3);
      expect(chain1[2]).to.have.property('data', data2);
      expect(chain1[2].hash).to.equal(chain2[2].hash);
    })
    .finally(() => {
      // TODO: Stop servers


      return B.delay(messageDelay);
    });
  });
});
