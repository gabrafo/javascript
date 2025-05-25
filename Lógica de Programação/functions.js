// 1. Declaração de Função (Function Declaration)
// Esta é a forma mais comum e tradicional de definir uma função em JavaScript.
// A função é "hoisted", o que significa que você pode chamá-la antes de sua declaração
// no código.

// Chamando a função declarada
console.log(funcaoDeclarada("Olá!"));

// Declaração da função
function funcaoDeclarada(parametro) {
  return "Função Declarada recebeu: " + parametro;
}

console.log("\n----------------------------------------\n");

// 2. Expressão de Função (Function Expression)
// Aqui, uma função anônima (sem nome) ou nomeada é atribuída a uma variável.
// A função NÃO é "hoisted", então você precisa declarar a variável antes de chamá-la.

// Função anônima atribuída a uma variável
const funcaoAnonima = function (parametro) {
  return "Função Anônima recebeu: " + parametro;
};

// Chamando a função anônima
console.log(funcaoAnonima("Mundo!"));

// Função nomeada atribuída a uma variável (menos comum, mas possível)
const funcaoNomeadaExpressao = function funcaoComNome(parametro) {
  return "Função Nomeada em Expressão recebeu: " + parametro;
};

// Chamando a função nomeada em expressão
console.log(funcaoNomeadaExpressao("JavaScript!"));

console.log("\n----------------------------------------\n");

// 3. Arrow Function (Função de Seta)
// Uma sintaxe mais concisa para escrever funções, especialmente útil para funções
// pequenas e callbacks. Possui algumas diferenças importantes em relação ao 'this'
// e não pode ser usada como construtor (com 'new').

// Sintaxe básica com um parâmetro e retorno implícito (sem chaves e 'return')
const funcaoSetaSimples = (parametro) =>
  "Função Seta Simples recebeu: " + parametro;

// Chamando a função de seta simples
console.log(funcaoSetaSimples("ES6!"));

// Sintaxe com múltiplos parâmetros (requer parênteses)
const funcaoSetaMultiplosParametros = (parametro1, parametro2) => {
  return (
    "Função Seta com múltiplos parâmetros recebeu: " +
    parametro1 +
    " e " +
    parametro2
  );
};

// Chamando a função de seta com múltiplos parâmetros
console.log(funcaoSetaMultiplosParametros("Um", "Dois"));

// Sintaxe sem parâmetros (requer parênteses vazios)
const funcaoSetaSemParametros = () => "Função Seta sem parâmetros!";

// Chamando a função de seta sem parâmetros
console.log(funcaoSetaSemParametros());

console.log("\n----------------------------------------\n");

// 4. Constructor Function (Função Construtora) - Usada para criar objetos
// Tradicionalmente usada para simular classes em JavaScript antes da introdução
// da sintaxe de classes (ES6). Usa a palavra-chave 'this' para definir propriedades
// do objeto que está sendo criado. Deve ser chamada com a palavra-chave 'new'.

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.saudar = function () {
    return (
      "Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos."
    );
  };
}

// Criando um objeto usando a função construtora
const pessoa1 = new Pessoa("Ana", 30);

// Acessando as propriedades e métodos do objeto
console.log("Nome da pessoa:", pessoa1.nome);
console.log(pessoa1.saudar());

console.log("\n----------------------------------------\n");

// 5. Método de Objeto
// Uma função que é propriedade de um objeto.

const meuObjeto = {
  mensagem: "Sou um método!",
  exibirMensagem: function () {
    return this.mensagem; // 'this' se refere ao objeto 'meuObjeto'
  },

  // Sintaxe curta para métodos de objeto (ES6)
  exibirMensagemCurta() {
    return this.mensagem.toUpperCase();
  },
};

// Chamando os métodos do objeto
console.log(meuObjeto.exibirMensagem());
console.log(meuObjeto.exibirMensagemCurta());
