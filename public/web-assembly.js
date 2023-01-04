const form = document.forms.fibonacci;

let wasmObject;

WebAssembly.instantiateStreaming(fetch("program.wasm"))
  .then((obj) => {
    wasmObject = obj;
  });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const input = formData.get('input');
  const memoize = !!formData.get('memoize');

  cleanResult();
  showSpinner();

  setTimeout(() => {
    const startTime = performance.now();
    const result = wasmObject.instance.exports.fibonacci(input);
    showResult({
      result,
      time: performance.now() - startTime,
    });
  }, 5);
});



