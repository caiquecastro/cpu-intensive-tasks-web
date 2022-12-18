importScripts('functions.js');

self.addEventListener('message', (e) => {
  console.log('Web worker received message', e);

  const startTime = performance.now();
  const result = calculateFibonacciRecursive(e.data);
  const endTime = performance.now();

  self.postMessage({
    result,
    time: endTime - startTime,
  });
});
