/** Usada para criar a lista inicial com os valores passados pelo array */
interface IPessoa {
	id: number;
    name: string;
    bio: string;
}

/** Classe pai com atributos padrão e método geral */
abstract class Pessoa {
    id: number;
    name: string;
    bio: string;

    constructor(id: number, name: string, bio: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }

    /** Retorna por padrão uma string vazia, pro caso do objeto não possuir o atributo info */
    getInfo() : string {
        return '';
    }
}

/** Subclasse da classe Pessoa, sendo a única com o atributo info */
class Ada extends Pessoa {
    info: string = 'A linguagem de programação Ada tem esse nome em homenagem a Ada Lovelace';

    constructor(id: number, name: string, bio: string) {
        super(id, name, bio);
    }

    /** Sobreescreve o método do pai, retornando o valor de seu atributo info */
    getInfo() {
        return this.info;
    }
}

/** Subclasse da classe Pessoa */
class Alan extends Pessoa {
    constructor(id: number, name: string, bio: string) {
        super(id, name, bio);
    }
}

/** Subclasse da classe Pessoa */
class Nikola extends Pessoa {
    constructor(id: number, name: string, bio: string) {
        super(id, name, bio);
    }
}

/** Subclasse da classe Pessoa */
class Nicolau extends Pessoa {
    constructor(id: number, name: string, bio: string) {
        super(id, name, bio);
    }
}

/** Classe que cria novas instâncias da classe Pessoa  */
class PessoaFactory {     
    /**
     * @param iPessoa - usado para definir o tipo de objeto a ser criado e os parâmetros para a criação do objeto
     * @returns uma nova instância de objeto do tipo definido, ou uma string de erro caso não haja classe correspondente
     */  
    static getPessoa(iPessoa: IPessoa) : Pessoa | string {
        if(iPessoa.name === "Ada Lovelace")
            return new Ada(iPessoa.id, iPessoa.name, iPessoa.bio);
        else if(iPessoa.name === "Alan Turing")
            return new Alan(iPessoa.id, iPessoa.name, iPessoa.bio);
        else if(iPessoa.name === "Nikola Tesla")
            return new Nikola(iPessoa.id, iPessoa.name, iPessoa.bio);
        else if(iPessoa.name === "Nicolau Copérnico")
            return new Nicolau(iPessoa.id, iPessoa.name, iPessoa.bio);
        
        return 'Não existe uma pessoa com esse nome';
    }
}


let lista: Array<IPessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

let listaInstancias: Array<Pessoa> = [];

/** Chama a classe criadora para cada item da lista e insere cada nova instância no array listaInstancias */
lista.map(function(iPessoa) {
    const pessoa: Pessoa | string = PessoaFactory.getPessoa(iPessoa);
    if(typeof pessoa != 'string'){
        listaInstancias.push(pessoa);
    } else {
        console.log(pessoa);
    }
});

listaInstancias.map(function(pessoa) {console.log(pessoa)});

/** Percorre a lista para encontrar a instância que possui a informação pedida, mostrando-a no console */
console.log('Quem criou a linguagem de programação Ada?');
listaInstancias.map(function(pessoa) {
    const info: string = pessoa.getInfo();
    if(info)
        console.log(info);
});