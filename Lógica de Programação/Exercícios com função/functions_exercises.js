// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  if (value) return true;
  return false;
}
console.log("0 é Truthy? " + isTruthy(0)); // 0 não é Truthy (é convertido para false)
console.log("1 é Truthy? " + isTruthy(1)); // 1 é Truthy (é convertido para true)

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function squarePerimeter(n) {
  return n + n + n + n;
}
console.log("Perimêtro de um quadrado com lado 20 é: " + squarePerimeter(20));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nameAndSurname(name, surname) {
  return name + " " + surname;
}
console.log(
  "Nome do desenvolvedor responsável pela resolução desses exercícios é: " +
    nameAndSurname("Gabriel", "Fagundes Mesquita Sousa")
);

// Crie uma função que verifica se um número é par
function isEven(n) {
  if (n < 0) {
    return isEvenUsingRecursion(-n);
  }

  if (n % 2 == 0) return true;
  return false;
}
console.log("10 é par? " + isEven(10));
console.log("25 é par? " + isEven(25));

// Agora usando recursão
function isEvenUsingRecursion(n) {
  if (n === 0) return true;
  else if (n === 1) return false;
  return isEvenUsingRecursion(n - 2);
}
console.log("50 é par (usando recursão)? " + isEvenUsingRecursion(50));
console.log("75 é par (usando recursão)? " + isEvenUsingRecursion(75));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function encapsulatingTypeOf(n) {
  return typeof n;
}
console.log("Tipo de null: " + encapsulatingTypeOf(null));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("Você está usando o scroll do mouse na página!");
});

// Corrija o erro abaixo (Já corrigido)
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados, totalPaises) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);
