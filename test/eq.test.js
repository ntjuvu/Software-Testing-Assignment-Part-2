// Tests for the eq.js functions
// COMP.SE.200 Software Testing
import { expect } from 'chai';
import eq from '../src/eq.js';

// Comparing same alphabets
it('eq.js: same alphabets', function() {
    expect(eq('a','a')).to.equal(true);
  });

// Comparing different alphabets
it('eq.js: different alphabets', function() {
    expect(eq('a','b')).to.equal(false);
  });
  
// Comparing same strings
it('eq.js: same strings', function() {
    expect(eq("ab","ab")).to.equal(true);
  });

// Comparing different strings 
it('eq.js: different strings', function() {
    expect(eq("ab","ba")).to.equal(false);
  });

// Comparing same numbers
it('eq.js: same numbers', function() {
    expect(eq(3,3)).to.equal(true);
  });  

// Comparing different numbers
it('eq.js: different numbers', function() {
    expect(eq(3,-4)).to.equal(false);
  });

// Comparing same number and char
it('eq.js: number and char', function() {
    expect(eq('3',3)).to.equal(true);
  });

// Comparing NaN and number
it('eq.js: Nan and Number', function() {
    expect(eq(NaN,3)).to.equal(false);
  });

// Comparing NaN and NAN
it('eq.js: Nan and NaN', function() {
    expect(eq(NaN,NaN)).to.equal(true);
  });