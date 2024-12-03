// Tests for the isSymbol.js functions
// COMP.SE.200 Software Testing

import { expect } from 'chai';
import isSymbol from '../src/isSymbol.js';

// Tests created for isSymbol.js function
describe('isSymbol.js', function() {

    // Symbol object
    it('isSymbol.js: symbol object', function() {
      expect(isSymbol(Symbol())).to.equal(true);
    });
    
    // String
    it('isSymbol.js: string', function() {
      expect(isSymbol('@')).to.equal(false);
    });

    // Number
    it('isSymbol.js: number', function() {
      expect(isSymbol(234)).to.equal(false);
    });

    // NaN
    it('isSymbol.js: NaN', function() {
      expect(isSymbol(NaN)).to.equal(false);
    });
});