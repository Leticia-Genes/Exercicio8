var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Classe pai com atributos padrão e método geral */
var Pessoa = /** @class */ (function () {
    function Pessoa(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
    /** Retorna por padrão uma string vazia, pro caso do objeto não possuir o atributo info */
    Pessoa.prototype.getInfo = function () {
        return '';
    };
    return Pessoa;
}());
/** Subclasse da classe Pessoa, sendo a única com o atributo info */
var Ada = /** @class */ (function (_super) {
    __extends(Ada, _super);
    function Ada(id, name, bio) {
        var _this = _super.call(this, id, name, bio) || this;
        _this.info = 'A linguagem de programação Ada tem esse nome em homenagem a Ada Lovelace';
        return _this;
    }
    /** Sobreescreve o método do pai, retornando o valor de seu atributo info */
    Ada.prototype.getInfo = function () {
        return this.info;
    };
    return Ada;
}(Pessoa));
/** Subclasse da classe Pessoa */
var Alan = /** @class */ (function (_super) {
    __extends(Alan, _super);
    function Alan(id, name, bio) {
        return _super.call(this, id, name, bio) || this;
    }
    return Alan;
}(Pessoa));
/** Subclasse da classe Pessoa */
var Nikola = /** @class */ (function (_super) {
    __extends(Nikola, _super);
    function Nikola(id, name, bio) {
        return _super.call(this, id, name, bio) || this;
    }
    return Nikola;
}(Pessoa));
/** Subclasse da classe Pessoa */
var Nicolau = /** @class */ (function (_super) {
    __extends(Nicolau, _super);
    function Nicolau(id, name, bio) {
        return _super.call(this, id, name, bio) || this;
    }
    return Nicolau;
}(Pessoa));
/** Classe que cria novas instâncias da classe Pessoa  */
var PessoaFactory = /** @class */ (function () {
    function PessoaFactory() {
    }
    /**
     * @param iPessoa - usado para definir o tipo de objeto a ser criado e os parâmetros para a criação do objeto
     * @returns uma nova instância de objeto do tipo definido, ou uma string de erro caso não haja classe correspondente
     */
    PessoaFactory.getPessoa = function (iPessoa) {
        if (iPessoa.name === "Ada Lovelace")
            return new Ada(iPessoa.id, iPessoa.name, iPessoa.bio);
        else if (iPessoa.name === "Alan Turing")
            return new Alan(iPessoa.id, iPessoa.name, iPessoa.bio);
        else if (iPessoa.name === "Nikola Tesla")
            return new Nikola(iPessoa.id, iPessoa.name, iPessoa.bio);
        else if (iPessoa.name === "Nicolau Copérnico")
            return new Nicolau(iPessoa.id, iPessoa.name, iPessoa.bio);
        return 'Não existe uma pessoa com esse nome';
    };
    return PessoaFactory;
}());
var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
var listaInstancias = [];
/** Chama a classe criadora para cada item da lista e insere cada nova instância no array listaInstancias */
lista.map(function (iPessoa) {
    var pessoa = PessoaFactory.getPessoa(iPessoa);
    if (typeof pessoa != 'string') {
        listaInstancias.push(pessoa);
    }
    else {
        console.log(pessoa);
    }
});
listaInstancias.map(function (pessoa) { console.log(pessoa); });
/** Percorre a lista para encontrar a instância que possui a informação pedida, mostrando-a no console */
console.log('Quem criou a linguagem de programação Ada?');
listaInstancias.map(function (pessoa) {
    var info = pessoa.getInfo();
    if (info)
        console.log(info);
});
//# sourceMappingURL=ex8.js.map