// Tests for the ceil.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import ceil from '../src/ceil.js';

// Tests created for ceil.js function
describe('ceil.js', function() {

    // No rounding
    it('ceil.js: no rounding', function() {
      expect(ceil(32)).to.equal(32);
    });

    // Round up to 1 decimal
    it('ceil.js: round 1 decimal', function() {
      expect(ceil(31.05,1)).to.equal(31.1);
    });

    // Round to hundreds
    it('ceil.js: round to hundreds', function() {
      expect(ceil(1030,-2)).to.equal(1100);
    });
});