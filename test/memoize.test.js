// Tests for the memoize.js functions
// COMP.SE.200 Software Testing
// Generated unit tests by AI


import { expect } from 'chai';
import memoize from '../src/memoize.js';

describe('memoize.js', function() {

    // Memoizing a function that doubles a number
    it('memoize.js: doubles a number', function() {
        const double = memoize(x => x * 2);

        expect(double(2)).to.equal(4); 
        
    });

    // Memoizing a function that returns values from an object
    it('memoize.js: retrieves object values', function() {
        const values = memoize(obj => Object.values(obj));

        const object = { 'a': 1, 'b': -1 };
        expect(values(object)).to.deep.equal([1, -1]); 
    });

    // Memoizing with a resolver that customizes the cache key
    it('memoize.js: custom cache key resolver', function() {
        const resolver = obj => JSON.stringify(obj);
        const values = memoize(obj => Object.values(obj), resolver);

        const object = { 'a': 1, 'b': -1 };
        expect(values(object)).to.deep.equal([1, -1]);
    });

    // Testing error for invalid function argument
    it('memoize.js: invalid function argument', function() {
        expect(() => memoize(null)).to.throw(TypeError, 'Expected a function');
    });

    // Manual cache modification
    it('memoize.js: manual cache modification', function() {
        const values = memoize(obj => Object.values(obj));

        const object = { 'a': 1, 'b': -1 };
        values(object); 

        // Modify the cache
        values.cache.set(object, ['modified']);
        expect(values(object)).to.deep.equal(['modified']); 
    });

   
});