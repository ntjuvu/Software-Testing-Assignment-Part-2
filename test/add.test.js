// Tests for the add.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import add from '../src/add.js';

describe('Addition', function() {
    it('Test add two positives', function() {
      expect(add(1,2)).to.equal(3);
    });
});