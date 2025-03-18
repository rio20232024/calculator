let expression = "";

function appendValue(value) {
  expression += value;
  document.getElementById("result").value = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    expression = eval(expression).toString(); // Evaluate the expression
    document.getElementById("result").value = expression;
  } catch (error) {
    document.getElementById("result").value = "Error";
    expression = "";
  }
}
function backspace() {
  expression = expression.slice(0, -1); // Remove the last character
  document.getElementById("result").value = expression;
}
