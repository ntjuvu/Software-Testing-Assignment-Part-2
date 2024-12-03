// Tests for the toString.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import toString from '../src/toString.js';

// Tests created for toString.js function
describe('toString.js', function() {

    // String
    it('toString.js: string', function() {
      expect(toString("some string")).to.equal("some string");
    });

    // Array
    it('toString.js: array', function() {
      expect(toString([2,3,4])).to.equal("2,3,4");
    });

    // Symbol
    it('toString.js: symbol', function() {
      expect(toString(Symbol('@'))).to.equal('Symbol(@)');
    });

    // Number
    it('toString.js: number', function() {
      expect(toString(3)).to.equal('3');
    });

    // -0
    it('toString.js: boolean', function() {
      expect(toString(-0)).to.equal('-0');
    });

    // Boolean
    it('toString.js: boolean', function() {
      expect(toString(true)).to.equal('true');
    });
});