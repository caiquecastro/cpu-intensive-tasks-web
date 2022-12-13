const form = document.forms.fibonacci;
const resultContainer = document.querySelector('#result');
const timingContainer = document.querySelector('#timing');

const worker = new Worker("worker.js");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const input = formData.get('input');

  resultContainer.textContent = '';
  worker.postMessage(+input);

  worker.onmessage = (e) => {
    console.log("Received message from web worker");
    resultContainer.textContent = e.data;
  }
});
