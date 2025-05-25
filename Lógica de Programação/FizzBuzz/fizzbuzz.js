function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // Uso de === p/ evitar conversão de tipo
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

let n;
n = parseInt(prompt("Até qual número inteiro você quer fizzbuzzar?"));
fizzbuzz(n);

if (!isNaN(n)) {
  fizzbuzz(n);
} else {
  alert("Por favor, digite um número inteiro válido.");
}
