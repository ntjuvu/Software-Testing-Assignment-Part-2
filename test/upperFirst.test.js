// Tests for the upperFirst.js functions
// COMP.SE.200 Software Testing
import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';


// all lowercase
it('upperFirst.js: all lowercase', function() {
    expect(upperFirst("hello")).to.equal("Hello");
  });

// all uppercase
it('upperFirst.js: all lowercase', function() {
    expect(upperFirst("HELLO")).to.equal("HELLO");
  });

// first lowercase, rest uppercase
it('upperFirst.js: first lowercase', function() {
    expect(upperFirst("hELLO")).to.equal("HELLO");
  });

// first uppercase, rest lowercase
it('upperFirst.js: first lowercase', function() {
    expect(upperFirst("Hello")).to.equal("Hello");
  });

// char
it('upperFirst.js: first lowercase', function() {
    expect(upperFirst('a')).to.equal('A');
  });

// number in string
it('upperFirst.js: number', function() {
    expect(upperFirst("3")).to.equal("3");
  }); 
// symbol in string
it('upperFirst.js: symbol', function() {
    expect(upperFirst("%")).to.equal("%");
  }); 

// testing NaN
it('upperFirst.js: NaN', function() {
    expect(upperFirst(NaN)).to.equal('');
  }); 

// testing empty string
it('upperFirst.js: empty string', function() {
    expect(upperFirst("")).to.equal("");
  });  
