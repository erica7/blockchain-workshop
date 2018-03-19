'use strict';
const B = require('bluebird');
const expect = require('chai').expect;
const rp = require('request-promise');

const BrewChain = require('./brewchain');

describe('BrewChain Proof Of Work', () => {
  it('should take a short time to do basic POW', () => {
    const myBrew = new BrewChain('000');
    const data = 'data for the new block';

    myBrew.init();
    const block = myBrew.createBlock(data);
    myBrew.addToChain(block);

    const chain = myBrew.getChain();
    expect(chain).to.have.property('length', 2);
    expect(chain[1]).to.include({
      index: 1,
      data: data,
      previousHash: chain['0'].hash
    });
  });

  it('should take a longer time to do basic POW', () => {
    const myBrew = new BrewChain('0000');
    const data = 'data for the new block';

    myBrew.init();
    const block = myBrew.createBlock(data);
    myBrew.addToChain(block);

    const chain = myBrew.getChain();
    expect(chain).to.have.property('length', 2);
    expect(chain[1]).to.include({
      index: 1,
      data: data,
      previousHash: chain['0'].hash
    });
  });
});
