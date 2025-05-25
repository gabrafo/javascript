function triangle(n) {
  for (let lines = 0; lines < n; lines++) {
    for (let rows = 0; rows < lines + 1; rows++) {
      process.stdout.write("#");
    }
    console.log();
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quantas linhas você quer que o triângulo tenha? ", (input) => {
  const n = parseInt(input);
  triangle(n);
  rl.close();
});
