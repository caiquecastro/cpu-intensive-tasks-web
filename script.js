const form = document.forms.fibonacci;
const resultContainer = document.querySelector('#result');
const timingContainer = document.querySelector('#timing');

function calculateFibonacci(number) {
  if (number < 0) {
    throw new TypeError("Invalid input for fibonacci");
  }
  if (number < 2) {
    return number;
  }

  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const input = formData.get('input');

  const startTime = performance.now();
  const result = calculateFibonacci(+input);
  const endTime = performance.now();
  resultContainer.textContent = result;
  timingContainer.textContent = endTime - startTime;
});
