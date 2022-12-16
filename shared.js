const loading = document.querySelector('#loading');
const resultBox = document.querySelector('#result-box');
const resultValue = document.querySelector('#result-value');
const timingContainer = document.querySelector('#result-timing');
const errorContainer = document.querySelector('#error-message');

function showSpinner() {
  errorContainer.classList.add('hidden');
  resultBox.classList.add('hidden');
  loading.classList.remove('hidden');
}

function hideSpinner() {
  loading.classList.add('hidden');
}

function cleanResult() {
  resultValue.textContent = '';
  timingContainer.textContent = '';
}

function showResult(data) {
  hideSpinner();
  resultBox.classList.remove('hidden');
  resultValue.textContent = data.result;
  timingContainer.textContent = data.time;
}

function showError(error) {
  hideSpinner();
  errorContainer.classList.remove('hidden');
  errorContainer.querySelector('span').textContent = error.message;
}
