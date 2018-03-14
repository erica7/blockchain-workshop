'use strict';
const { createBlock, genesisBlock } = require('./blockchain');

const chain = [];

// Do some stuff with the exported members of blockchain
chain.push(genesisBlock);
chain.push(createBlock(chain[0], 'first block'));
chain.push(createBlock(chain[1], 'amirichyet?'));

module.exports = { chain };
