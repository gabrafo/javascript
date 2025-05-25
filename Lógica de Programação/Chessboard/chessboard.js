function chessboardGenerator(n, m) {
  const output = document.getElementById("output");

  for (let i = 0; i < n; i++) {
    const line = document.createElement("pre"); // Cria elemento <pre>, o escolhi para permitir que espaços em branco no início da linha não sejam ignorados
    if (i % 2 === 0) {
      line.textContent = `# `.repeat(m);
    } else {
      line.textContent = ` #`.repeat(m);
    }
    output.appendChild(line);
  }
}

let n, m;
n = parseInt(prompt("Quantas linhas de tabuleiro você quer?"));
m = parseInt(prompt("Quantos elementos por linha você quer?"));

if (!isNaN(n) && !isNaN(m)) {
  chessboardGenerator(n, m);
} else {
  document.getElementById("output").textContent = "Entrada inválida.";
}
