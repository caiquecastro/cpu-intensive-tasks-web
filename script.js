const form = document.forms.fibonacci;
const resultContainer = document.querySelector('#result');
const timingContainer = document.querySelector('#timing');

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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const input = formData.get('input');

  const startTime = performance.now();
  const result = calculateFibonacciRecursive(+input);
  const endTime = performance.now();
  resultContainer.textContent = result;
  timingContainer.textContent = endTime - startTime;
});
