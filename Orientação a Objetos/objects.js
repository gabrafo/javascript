/*
  JavaScript é uma linguagem baseada em protótipos, o sugar syntax de class e extends no ES2015 apenas “esconde” essa mecânica, 
  mas por baixo dos panos continua sendo prototipal.

  Em JavaScript, objetos literais herdam de Object.prototype (protótipo raiz).
  A cadeia de protótipos define como o motor busca propriedades e métodos:
  1. Procura em obj próprio (propriedades/diretamente definidas).
  2. Se não encontrar, sobe para o protótipo de obj (obj.__proto__ ou Object.getPrototypeOf(obj)).
  3. Repete: procura no protótipo, depois no protótipo desse protótipo, e assim por diante.
  4. Quando chegar a Object.prototype, este é o último nível padrão.
  5. Acima de Object.prototype, o protótipo é null, indicando o fim da cadeia.
*/

var pessoa = { // Objeto literal que herda de Object.prototype
    // Atributos/Propriedades
    nome: 'Gabriel',
    sobrenome: 'Fagundes Mesquita Sousa',
    idade: 20,
    apelido: 'Gabrafo',

    // Métodos
    estudar: () => { // Arrow function
        console.log("Zzzzzz... Estou estudando..... Zzzzz...");
    },

    apresentar: function(){ // Função normal (expressão)
        console.log("Meu nome é " + this.nome + " " + this.sobrenome +
        ".\nNo entanto, você pode me chamar de " + this.apelido + ".");
    }, // ← trailing comma (vírgula no último item do objeto)
}

console.log('Objeto "pessoa":')
console.log(pessoa)

console.log("-----")

console.log('Atributo/propriedade "idade" de "pessoa":')
console.log(pessoa.idade)

console.log("-----")

console.log('Método "estudar" de "pessoa":')
pessoa.estudar();

console.log("-----")

console.log('Método "apresentar" de "pessoa":')
pessoa.apresentar();

console.log("-----")

// Checando herança (cadeia de protótipos):
console.log('Protótipo de pessoa:', Object.getPrototypeOf(pessoa));
console.log('Protótipo de Object.prototype:', Object.getPrototypeOf(Object.prototype));
// Não tem prototype acima do Object.prototype, porque ele é o fim da cadeia.

// Fluxo de busca de uma propriedade (ex.: toString):
// pessoa.toString -> não existe em pessoa -> procura em Object.prototype -> encontra -> executa.

console.log("-----")

// Criar objetos sem essa herança padrão:
const objetoPuro = Object.create(null);
console.log('objetoPuro.toString:', objetoPuro.toString); // undefined
// Aqui, o protótipo é null, então não há um objeto pai, e, portanto, não achamos o toString.

