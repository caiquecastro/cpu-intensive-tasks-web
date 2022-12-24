const form = document.forms.fibonacci;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const input = formData.get('input');
  const memoize = !!formData.get('memoize');

  showSpinner();

  setTimeout(() => {
    try {
      const startTime = performance.now();
      const result = calculateFibonacciRecursive(+input, { memoize });
      showResult({
        result,
        time: performance.now() - startTime,
      });
    } catch (error) {
      showError(error);
    }
  }, 1);
});
