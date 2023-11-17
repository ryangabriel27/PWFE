export class Curriculo {
    id: number = 0;
    nome: string = '';
    idade: number = 0;
    telefone: string = '';
    descricao: string = '';
    constructor(
        id: number,
        nome: string,
        idade: number,
        telefone: string,
        descricao: string
    ) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.descricao = descricao;
    }
}