// script.js
document.addEventListener("DOMContentLoaded", function () {
  const screen = document.getElementById("screen");
  let expression = "";
  let waitingForSecondOperand = false; 

  function updateScreen(value) {
      screen.value = value || "0";
  }

  function handleClick(button) {
      const value = button.textContent;

      switch (value) {
          case 'CE':
              expression = expression.slice(0, -1);
              updateScreen(expression);
              break;
          case 'AC':
              expression = "";
              updateScreen(expression);
              break;
          case '=':
              try {
                  expression = evaluateExpression(expression);
                  updateScreen(expression);
                  expression = ""; 
              } catch {
                  updateScreen("Error");
                  expression = "";
              }
              break;
          case 'x!':
              const num = parseInt(expression, 10);
              expression = factorial(num).toString();
              updateScreen(expression);
              break;
          case 'sin':
              expression = Math.sin(parseFloat(expression) * Math.PI / 180).toString();
              updateScreen(expression);
              break;
          case 'cos':
              expression = Math.cos(parseFloat(expression) * Math.PI / 180).toString();
              updateScreen(expression);
              break;
          case 'tan':
              expression = Math.tan(parseFloat(expression) * Math.PI / 180).toString();
              updateScreen(expression);
              break;
          case '&pi;':
              expression += Math.PI.toString();
              updateScreen(expression);
              break;
          case 'log':
              expression = Math.log10(parseFloat(expression)).toString();
              updateScreen(expression);
              break;
          case '&radic;':
              expression = Math.sqrt(parseFloat(expression)).toString();
              updateScreen(expression);
              break;
          case 'e':
              expression += Math.E.toString();
              updateScreen(expression);
              break;
          case 'x^y':
              expression += '^'; 
              updateScreen(expression);
              waitingForSecondOperand = true;
              break;
          case '&divide;':
              expression += '/';
              updateScreen(expression);
              break;
          case '&times;':
              expression += '*';
              updateScreen(expression);
              break;
          default:
              if (waitingForSecondOperand) {
                  expression = value;
                  waitingForSecondOperand = false;
              } else {
                  expression += value;
              }
              updateScreen(expression);
      }
  }

  function evaluateExpression(exp) {
      const sanitizedExp = exp.replace(/\^/g, '**');
      return eval(sanitizedExp);
  }

  function factorial(n) {
      if (n === 0 || n === 1) return 1;
      return n * factorial(n - 1);
  }

  document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener("click", () => handleClick(button));
  });
const themeToggler = document.querySelector(".theme-toggler");
    themeToggler.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
