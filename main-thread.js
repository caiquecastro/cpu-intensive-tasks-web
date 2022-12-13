const form = document.forms.fibonacci;
const resultContainer = document.querySelector('#result');
const timingContainer = document.querySelector('#timing');

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
