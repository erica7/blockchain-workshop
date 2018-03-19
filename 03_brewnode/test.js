'use strict';
const B = require('bluebird');
const expect = require('chai').expect;

const BrewNode = require('./brewnode');

describe('BrewNode', () => {
  const messageDelay = 50; // (ms) Wait to make sure websocket messages get sent
  it('should start a node on a port and create a chain', () => {
    const port = 3001;

    // TODO: Create new node and initialize it
    const node = {};

    expect(node.getStats()).to.include({
      blocks: 1,
      peers: 0
    });

    const data = 'the start of something beautiful';
    // TODO: Create a block on the node

    expect(node.getStats()).to.include({
      blocks: 2,
      peers: 0
    });
    node.close();
  });

  it('should peer with another node and send a block', () => {
    const port1 = 3001;
    const port2 = 3002;

    // TODO: Create 2 new nodes, initialize, make them peers
    const node1 = {};
    const node2 = {};

    return B.delay(messageDelay)
      .then(() => {
        expect(node1.getStats()).to.include({
          blocks: 1,
          peers: 1
        });
        expect(node2.getStats()).to.include({
          blocks: 1,
          peers: 1
        });

        const data = 'sharing blocks are caring blocks';
        // TODO: Create a block on node 1, it will be broadcast to its peers

      })
      .delay(messageDelay)
      .then(() => {
        expect(node1.getStats()).to.include({
          blocks: 2,
          peers: 1
        });
        expect(node2.getStats()).to.include({
          blocks: 2,
          peers: 1
        });
        node1.close();
        node2.close();
      })
      .delay(messageDelay); // Keeps final console logs from appearing after test results
  });

  it('should peer with another node and blocks made before peering', () => {
    const port1 = 3001;
    const port2 = 3002;
    const data1 = 'first I was afraid';
    const data2 =  'I was petrified';

    // TODO: Create node 1, initialize and add 2 messages
    const node1 = {};

    // TODO: Create node 2, initialize DON'T PEER
    const node2 = {};

    return B.delay(messageDelay)
      .then(() => {
        expect(node1.getStats()).to.include({
          blocks: 3,
          peers: 0
        });
        expect(node2.getStats()).to.include({
          blocks: 1,
          peers: 0
        });

        // TODO: Make node1 and node2 peers

      })
      .delay(messageDelay)
      .then(() => {
        expect(node1.getStats()).to.include({
          blocks: 3,
          peers: 1
        });
        expect(node2.getStats()).to.include({
          blocks: 3,
          peers: 1
        });
        node1.close();
        node2.close();
      })
      .delay(messageDelay); // Keeps final console logs from appearing after test results
  });
});
