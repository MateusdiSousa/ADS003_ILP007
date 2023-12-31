import { ClienteI } from "./clientes";

export interface Servico {
    nome: string;
    descricao: string;
    preco: number;
    quantidade_vendas: number;
    quantidade_vendas_masculino: number;
    quantidade_vendas_feminino: number;
    valor_total_vendas: number;
}

export interface ServicoI {
    id : string
    nome: string;
    descricao: string;
    preco: number;
    quantidade_vendas: number;
    quantidade_vendas_masculino: number;
    quantidade_vendas_feminino: number;
    valor_total_vendas: number;
}

export interface ServicoVenda {
    id : number
    quantidade : number
    valor_total : number
    cliente : ClienteI
    servico : ServicoI
}