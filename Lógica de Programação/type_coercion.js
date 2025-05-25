if (false == 0) {
  console.log("False e 0 são iguais!");
} else {
  console.log("False e 0 não são iguais!");
}

// ---

if (true == 1) {
  console.log("True e 1 são iguais!");
} else {
  console.log("True e 1 não são iguais!");
}

// ---

let soma1, soma2;

soma1 = "5" - 1;
console.log('"5" - 1 é ' + soma1);

soma2 = "Cinco" + 1;
console.log('"Cinco" + 1 é ' + soma2);

// ---

// null e undefined representam ausência de valor
// undefined: variável declarada mas não inicializada
// null: valor vazio atribuído intencionalmente
// NaN: resultado inválido de uma operação numérica

console.log("null é igual (==) a undefined? " + (null == undefined));

let resultadoInvalido = "abc" * 3;
console.log('"abc" * 3 resulta em: ' + resultadoInvalido); // NaN

console.log(
  '"abc" é um resultado inválido (NaN) ? ' + Number.isNaN(resultadoInvalido)
);

console.log("NaN === NaN? " + (NaN === NaN)); // false

/* 
NaN não é igual nem a si mesmo.
Por quê? Porque NaN significa um valor que 'não é um número válido', e comparações com algo indefinido ou inválido não fazem sentido matematicamente.
Por isso, o JavaScript considera que dois NaNs podem representar erros diferentes.
*/

// ---

let multiplicacao1, multiplicacao2;

multiplicacao1 = "5" * 2;
console.log('Resultado de "5" * 2 é: ' + multiplicacao1); // Conversão implícita de tipos

multiplicacao2 = "Cinco" * 2;
console.log('Resultado de "Cinco" * 2 é: ' + multiplicacao2); // Resultado não numérico
