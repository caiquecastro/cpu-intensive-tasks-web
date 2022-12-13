importScripts('functions.js');

self.onmessage = (e) => {
  console.log("Web worker received message", e);

  postMessage(calculateFibonacciRecursive(e.data));
}
