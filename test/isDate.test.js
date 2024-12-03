// Tests for the isDate.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import isDate from '../src/isDate.js';

// Tests created for isDate.js function
describe('isDate.js', function() {

    // A valid date object (new Date() is the current date)
    it('isDate.js: date object', function() {
      expect(isDate(new Date())).to.equal(true);
    });

    // An invalid date object
    it('isDate.js: invalid date object', function() {
      expect(isDate(new Date('invalid'))).to.equal(true);
    });

    // A string date
    it('isDate.js: string date', function() {
      expect(isDate('3.12.2024')).to.equal(false);
    });

    // An undefined date
    it('isDate.js: undefined', function() {
      expect(isDate(undefined)).to.equal(false);
    });
});