// Tests for the add.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import add from '../src/add.js';

// Tests created for add.js function
describe('add.js', function() {

    // Adding two positive numbers
    it('add.js: two positive numbers', function() {
      expect(add(1,2)).to.equal(3);
    });

    // Adding two negative values
    it('add.js: two negative numbers', function() {
      expect(add(-1,-2)).to.equal(-3);
    });

    // Adding augend string
    it('add.js: augend string', function() {
      expect(add("3",2)).to.equal(5);
    });

    // Adding addend string
    it('add.js: addend string', function() {
      expect(add(2,"3")).to.equal(5);
    });

    // Adding augend undefined
    it('add.js: augend undefined', function() {
      expect(add(undefined,2)).to.equal(2);
    });

    // Adding addend undefined
    it('add.js: addend undefined', function() {
      expect(add(2,undefined)).to.equal(2);
    });

    // Adding two undefined values
    it('add.js: both undefined', function() {
      expect(add(undefined,undefined)).to.equal(0);
    });


});