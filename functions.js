function calculateFibonacciRecursive(number) {
  if (number < 0) {
    throw new TypeError("Invalid input for fibonacci");
  }
  if (number < 2) {
    return number;
  }

  return calculateFibonacciRecursive(number - 1) + calculateFibonacciRecursive(number - 2);
}

function calculateFibonacci(number) {
  if (number < 0) {
    throw new TypeError("Invalid input for fibonacci");
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
