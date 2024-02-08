function addToResult(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  var result = document.getElementById('result').value;
  var finalResult = eval(result);
  document.getElementById('result').value = finalResult;
}

function clearResult() {
  document.getElementById('result').value = '';
}
