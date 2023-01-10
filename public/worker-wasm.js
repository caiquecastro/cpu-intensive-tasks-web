importScripts('functions.js');

let wasmObject;

WebAssembly.instantiateStreaming(fetch("fibonacci.wasm"))
  .then((obj) => {
    wasmObject = obj;
  });

self.addEventListener('message', (e) => {
  console.log('Web worker received message to run WebAssembly function', e);

  const { value } = e.data;

  const startTime = performance.now();
  const result = wasmObject.instance.exports.fibonacci(BigInt(value));
  const endTime = performance.now();

  self.postMessage({
    result,
    time: endTime - startTime,
  });
});
