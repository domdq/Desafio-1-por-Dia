function calculate(operator) {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerHTML = "Digite Um Numero";
    return;
  }

  switch (operator) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        document.getElementById("resultado").innerHTML =
          "Não e possível dividir por zero 0";
        return;
      }
      resultado = num1 / num2;
      break;
    default:
  }
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
