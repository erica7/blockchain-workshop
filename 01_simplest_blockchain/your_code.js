'use strict';
const { createBlock, genesisBlock } = require('./blockchain');

const chain = [];

// TODO: Using exported members of blockchain build the chain described in the README
chain.push(genesisBlock);
chain.push(createBlock(chain[chain.length - 1], "first block"));
chain.push(createBlock(chain[chain.length - 1], "amirichyet?"));

module.exports = { chain };
