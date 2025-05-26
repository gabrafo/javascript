class Pessoa {
    // Construtor
    constructor(nome, sobrenome, idade, apelido){
        // Atenção: TEM que colocar o # na frente de atributos privados, senão ele cria atributos públicos.
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#idade = idade;
        this.#apelido = apelido;
    }

    // Atributos/Propriedades
    #nome; // Atributos PRIVADOS, utilizam # no início do nome para demarcar isso
    #sobrenome;
    #idade;
    #apelido;

    // Métodos
    estudar(){ // Não precisa do "function" na frente, se colocar dá erro de sintaxe
        console.log("Zzzzzz... Estou estudando..... Zzzzz...");
    };

    apresentar(){
        console.log("Meu nome é " + this.#nome + " " + this.#sobrenome +
        ".\nNo entanto, você pode me chamar de " + this.#apelido + ".\n"
       + "Atualmente tenho " + this.#idade + " anos.");
    };
}

pessoa = new Pessoa("Gabriel", "Fagundes", 20, "Gabrafo");

pessoa.apresentar();
pessoa.estudar();