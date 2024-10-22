import { assert } from 'chai';
import { factorial } from '../factorial.js';

describe('factorial function', () => {
  it('should return 1 for factorial of 0', () => {
    assert.equal(factorial(0), 1);
  });

  it('should return 1 for factorial of 1', () => {
    assert.equal(factorial(1), 1);
  });

  it('should return 2 for factorial of 2', () => {
    assert.equal(factorial(2), 2);
  });

  it('should return 6 for factorial of 3', () => {
    assert.equal(factorial(3), 6);
  });

  it('should throw a RangeError for negative numbers', () => {
    assert.throws(() => factorial(-1), RangeError, 'x must be a non-negative integer');
  });
});
