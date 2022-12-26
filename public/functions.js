const fibonacciCache = new Map();

function calculateFibonacciRecursive(number, { memoize = false } = {}) {
  if (Number.isNaN(number) || number < 0) {
    throw new TypeError('Invalid input for fibonacci');
  }

  if (number < 2) {
    return number;
  }

  if (memoize && fibonacciCache.has(number)) {
    return fibonacciCache.get(number);
  }

  const secondToLast = calculateFibonacciRecursive(number - 2, { memoize });
  const last = calculateFibonacciRecursive(number - 1, { memoize });
  const result = last + secondToLast;

  if (memoize) {
    fibonacciCache.set(number, result);
  }

  return result;
}

function calculateFibonacci(number) {
  if (number < 0) {
    throw new TypeError('Invalid input for fibonacci');
  }

  let lastButOne = 0;
  let last = 1;
  let result = 1;
  for (let i = 1; i < number; i++) {
    result = last + lastButOne;
    lastButOne = last;
    last = result;
  }

  return result;
}

function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
