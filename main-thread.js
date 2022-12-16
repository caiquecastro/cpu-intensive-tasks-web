const form = document.forms.fibonacci;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const input = formData.get('input');

  showSpinner();

  setTimeout(() => {
    try {
      const startTime = performance.now();
      const result = calculateFibonacciRecursive(+input);
      showResult({
        result,
        time: performance.now() - startTime,
      });
    } catch (error) {
      showError(error);
    } finally {
      hideSpinner();
    }
  }, 1);
});
