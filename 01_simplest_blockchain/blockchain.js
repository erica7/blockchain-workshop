'use strict';

const createHash = (block) => JSON.stringify(block);

const createBlock = (lastBlock, data) => {
	let newBlock = {
	    timestamp: new Date().getTime()
	  , data: data
	  , index: lastBlock.index+1
	  , previousHash: lastBlock.hash
	};

	newBlock.hash = createHash(newBlock);

	return newBlock;
}

const genesisBlock = {
	index: 0
  , timestamp: new Date().getTime()
  , data: 'Our genesis data'
  , previousHash: "-1"
};
genesisBlock.hash = createHash(genesisBlock);

module.exports = {
  genesisBlock, // an object
  createBlock   // a function
}
