'use strict';
const expect = require('chai').expect;
const tk = require('timekeeper');

tk.freeze(new Date());
const yourCode = require('./your_code');
const solution = require('./solution')

describe('Your code', () => {
  it('should export a chain', () => {
    expect(yourCode.chain).to.exist;
  })
  it('should have 3 nodes', () => {
    expect(yourCode.chain.length).to.equal(3);
  })
  it('should have the data in the right order', () => {
    expect(JSON.stringify(yourCode.chain)).to.equal(JSON.stringify(solution.chain));
  })
})
tk.reset();
