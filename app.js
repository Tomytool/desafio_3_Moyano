function opcionFibonacci() {
  let fibonacci1 = 1;
  let fibonacci2 = 2;
  let resultadoFibonacci;
  const calculoFibonacci = parseInt(
    prompt('ingrese el numero Fibonacci a Calcular:')
  );
if (calculoFibonacci < 1) {
  alert('Debe ingresar un número mayor a 1');
  break;
}
  for (let index = 3; index < calculoFibonacci; index++) {
    resultadoFibonacci = fibonacci1 + fibonacci2;
    fibonacci1 = fibonacci2;
    fibonacci2 = resultadoFibonacci;
  }
  console.log(resultadoFibonacci);
}

function impares() {
  const calculoImpares = parseInt(prompt('Ingrese un numero del 1 al 100: '));
  if (calculoImpares < 1) {
    alert('Debe ingresar un número mayor o igual a 1');
    break;
  }
  for (let index = 1; index <= calculoImpares; index++) {
    if (index % 2 != 0) {
      console.log(index);
    }
  }
}
function factorial() {
  let resultadoFactorial = 1;
  const calcularFactorial = parseInt(
    prompt('Ingrese el nuemro Factorial a calcular: ')
  );
  for (let index = 1; index <= calcularFactorial; index++) {
    resultadoFactorial = resultadoFactorial * index;
  }
  console.log(
    'el factorial de ' + calcularFactorial + ' es ' + resultadoFactorial
  );
}
