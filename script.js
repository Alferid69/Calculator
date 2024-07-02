var expression = document.getElementById("user-input");
expression.value = "";

function addExpression(input) {
  if (expression.value == "Invalid Syntax") expression.value = "";
  if (input == ".") {
    if (!expression.value.includes(input)) expression.value += input;
  }
  else expression.value += input;
}

function backSpace() {
  expression.value = expression.value.slice(0, -1);
}

function addButtonListener(id) {
  var button = document.getElementById(id);
  if (id == "=") {
    button.addEventListener("click", function () {
      evaluateExpression();
    });
  } else if (id == "bks") {
    button.addEventListener("click", function () {
      backSpace();
    });
  } else {
    button.addEventListener("click", function () {
      addExpression(button.value);
    });
  }
}

function evaluateExpression() {
  try {
    var result = eval(expression.value);
    expression.value = result.toFixed(3);
  } catch (error) {
    expression.value = "Invalid Syntax";
  }
}

// Create event listeners for each button
addButtonListener("(");
addButtonListener(")");
addButtonListener("bks");
addButtonListener("clr");
addButtonListener("/");
addButtonListener("*");
addButtonListener("-");
addButtonListener("+");
addButtonListener("0");
addButtonListener("=");
addButtonListener(".");
addButtonListener("1");
addButtonListener("2");
addButtonListener("3");
addButtonListener("4");
addButtonListener("5");
addButtonListener("6");
addButtonListener("7");
addButtonListener("8");
addButtonListener("9");
