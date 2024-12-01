// Tests for the toNumber.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import { assert } from 'chai';
import toNumber from '../src/toNumber.js';

// Tests created for toNumber.js function
describe('toNumber.js', function() {

    // Already number
    it('toNumber.js: already number', function() {
      expect(toNumber(3)).to.equal(3);
    });

    // Object
    it('toNumber.js: object', function() {
      expect(toNumber([3])).to.equal(3);
    });

    // Infinity
    it('toNumber.js: infinity', function() {
      expect(toNumber(Infinity)).to.equal(Infinity);
    });

    // Symbol
    it('toNumber.js: symbol', function() {
      assert.isNaN(toNumber('@'));
    });

    // String
    it('toNumber.js: string', function() {
      expect(toNumber('5.3')).to.equal(5.3);
    });

    // Nan
    it('toNumber.js: NaN', function() {
      assert.isNaN(toNumber(NaN));
    });

    // Min value
    // (Smallest positive non-zero number that JavaScript can represent.)
    it('toNumber.js: min value', function() {
      expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    });
});