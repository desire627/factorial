//Asiimwe Desire and Abakwase Immaculate

export function factorial(x) {
  if (x < 0) {
    throw new RangeError('x must be a non-negative integer');
  }
  if (x === 0 || x === 1) {
    return 1;
  }
  return x * factorial(x - 1);
}
