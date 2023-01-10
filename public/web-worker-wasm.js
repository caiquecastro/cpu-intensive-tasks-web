const form = document.forms.fibonacci;

const worker = new Worker('worker-wasm.js');

worker.addEventListener('message', (e) => {
  console.log('Received message from web worker', e);

  showResult(e.data);
});

worker.addEventListener('error', (error) => {
  console.log('Received error from web worker', error);
  showError(error);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const input = formData.get('input');
  const memoize = !!formData.get('memoize');

  cleanResult();
  showSpinner();
  worker.postMessage({ value: +input, memoize });
});
