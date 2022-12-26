importScripts('functions.js');

self.addEventListener('message', (e) => {
  console.log('Web worker received message', e);

  const { value, memoize } = e.data;

  const startTime = performance.now();
  const result = calculateFibonacciRecursive(value, { memoize });
  const endTime = performance.now();

  self.postMessage({
    result,
    time: endTime - startTime,
  });
});
