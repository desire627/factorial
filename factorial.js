export function factorial(x) {
    if (x < 0) {
      throw new RangeError('n must be a non-negative integer');
    }
    if (x === 0 || x === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= x; i++) {
      result *= i;
    }
    return result;
  }
  