'use strict';
const expect = require('chai').expect;

const BrewChain = require('./brewchain');

describe('BrewChain', () => {
  it('should create an empty chain', () => {
    const myBrew = new BrewChain();

    // This test is already done for you.  You get a freebie
    expect(myBrew).to.have.all.keys([
      'init',
      'createBlock',
      'addToChain',
      'checkNewBlockIsValid',
      'getLatestBlock',
      'getTotalBlocks',
      'getChain'
    ]);
  });

  it('should create a chain with a genesis block when you INITialize it', () => {
    const myBrew = new BrewChain();

    // TODO: Initialize the chain
    myBrew.init();

    // TODO: Get the chain from this BrewChain
    // const chain = {};
    const chain = myBrew.getChain();

    expect(chain).to.have.property('length', 1);
    expect(chain[0]).to.include({
      index: 0,
      data: 'our genesis data',
      previousHash: '-1'
    })
    expect(chain[0]).to.have.property('timestamp').that.is.a('number');
    expect(chain[0]).to.have.property('hash').that.is.a('string');
  });

  it('should be able to create a block and add it to the chain', () => {
    const myBrew = new BrewChain();
    const data = 'data for the new block';

    // TODO: Initialize brew, create a new block, add to chain
    // (hint: order of those steps is important)
    
    // const block = {};
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

  it('should not let an invalid block on the chain', () => {
    const myBrew = new BrewChain();
    const data1 = 'data for the new block';
    const data2 = 'data for the bad block';
    myBrew.init();

    // TODO: Create two blocks THEN try to add them
    const block1 = myBrew.createBlock(data1);
    const block2 = myBrew.createBlock(data2);
    const didAdd1 = myBrew.addToChain(block1);
    const didAdd2 = myBrew.addToChain(block2);

    // TODO: Create block 2 again and check to see if it will work
    const block2Retry = myBrew.createBlock(data2);
    const block2IsValid = myBrew.checkNewBlockIsValid(block2Retry, myBrew.getLatestBlock(0));
    const didAdd2Retry = myBrew.addToChain(block2Retry);


    // TODO: Get latest blocks and total blocks off of chain
    const latestBlock = myBrew.getLatestBlock();
    const totalBlocks = myBrew.getTotalBlocks();

    expect(block1).to.include({
      index: 1,
      data: data1
    });
    expect(block2).to.include({
      index: 1,
      data: data2
    });
    expect(didAdd1).to.equal(true, 'block 1 should have been added to chain');
    expect(didAdd2).to.equal(false, 'block 2 should not have been added to chain');
    expect(block2Retry).to.include({
      index: 2,
      data: data2
    });
    expect(block2IsValid).to.equal(true, 'block 2 retry should be valid');
    expect(didAdd2Retry).to.equal(true, 'block 2 retry should have been added to chain');
    expect(latestBlock).to.include({
      index: 2,
      data: data2,
      previousHash: block1.hash
    });
    expect(totalBlocks).to.equal(3);
  });
});
