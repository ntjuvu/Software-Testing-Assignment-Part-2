// Tests for the isEmpty.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

// Tests created for isEmpty.js function
describe('isEmpty.js', function() {

    // Empty value
    it('isEmpty.js: null value', function() {
      expect(isEmpty(null)).to.equal(true);
    });

    // Number
    it('isEmpty.js: some number', function() {
      expect(isEmpty(4)).to.equal(true);
    });

    // Empty array
    it('isEmpty.js: empty array', function() {
      expect(isEmpty([])).to.equal(true);
    });

    // Not empty array
    it('isEmpty.js: not empty array', function() {
      expect(isEmpty([1,2])).to.equal(false);
    });

    // Empty map
    it('isEmpty.js: empty map', function() {
      const emap = new Map();
      expect(isEmpty(emap)).to.equal(true);
    });

    // Not empty map
    it('isEmpty.js: not empty map', function() {
      const map = new Map([['a', 1]]);
      expect(isEmpty(map)).to.equal(false);
    });

});