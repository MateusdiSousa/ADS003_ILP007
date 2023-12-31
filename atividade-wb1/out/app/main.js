"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var cadastroCliente_1 = __importDefault(require("../negocio/cliente/cadastroCliente"));
var comprarProduto_1 = __importDefault(require("../negocio/cliente/comprarProduto"));
var comprarServico_1 = __importDefault(require("../negocio/cliente/comprarServico"));
var editarCliente_1 = __importDefault(require("../negocio/cliente/editarCliente"));
var listagemClientes_1 = __importDefault(require("../negocio/cliente/listagemClientes"));
var removerCliente_1 = __importDefault(require("../negocio/cliente/removerCliente"));
var cadastrarProduto_1 = __importDefault(require("../negocio/produto/cadastrarProduto"));
var editarProduto_1 = __importDefault(require("../negocio/produto/editarProduto"));
var listagemProduto_1 = __importDefault(require("../negocio/produto/listagemProduto"));
var removerProduto_1 = __importDefault(require("../negocio/produto/removerProduto"));
var cadastroServico_1 = __importDefault(require("../negocio/servico/cadastroServico"));
var editarServico_1 = __importDefault(require("../negocio/servico/editarServico"));
var listagemServico_1 = __importDefault(require("../negocio/servico/listagemServico"));
var removerServico_1 = __importDefault(require("../negocio/servico/removerServico"));
var teste_1 = require("../negocio/teste");
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Cadastrar servi\u00E7o");
    console.log("4 - Listar servico");
    console.log("5 - Cadastrar produto");
    console.log("6 - Listar produto");
    console.log("7 - Comprar Produto");
    console.log("8 - Comprar Servi\u00E7o");
    console.log("9 - Editar Cliente");
    console.log("10 - Editar Servico");
    console.log("11 - Editar Produto");
    console.log("12 - Remover Cliente");
    console.log("13 - Remover Servico");
    console.log("14 - Remover Produto");
    console.log("15 - Criar ambiente de teste");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastroCliente = new cadastroCliente_1.default(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case 2:
            var listagemCliente = new listagemClientes_1.default(empresa.getClientes);
            listagemCliente.listar();
            break;
        case 3:
            var cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 4:
            var listagemServico = new listagemServico_1.default(empresa.getServicos);
            listagemServico.listar();
            break;
        case 5:
            var cadastroProduto = new cadastrarProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 6:
            var listagemProduto = new listagemProduto_1.default(empresa.getProdutos);
            listagemProduto.listar();
            break;
        case 7:
            var comprarProduto = new comprarProduto_1.default(empresa.getProdutos);
            comprarProduto.selecionarCliente(empresa.getClientes);
            comprarProduto.comprar();
            break;
        case 8:
            var comprarServico = new comprarServico_1.default(empresa.getServicos);
            comprarServico.selecionarCliente(empresa.getClientes);
            comprarServico.comprar();
            break;
        case 9:
            var editarCliente = new editarCliente_1.default();
            editarCliente.selecionarCliente(empresa.getClientes);
            editarCliente.editar();
            break;
        case 10:
            var editarServico = new editarServico_1.default();
            editarServico.selecionarServico(empresa.getServicos);
            editarServico.editar();
            break;
        case 11:
            var editarProduto = new editarProduto_1.default();
            editarProduto.selecionarProduto(empresa.getProdutos);
            editarProduto.editar();
            break;
        case 12:
            var removerCliente = new removerCliente_1.default();
            removerCliente.remover(empresa.getClientes);
            break;
        case 13:
            var removerProdutos = new removerProduto_1.default();
            removerProdutos.remover(empresa.getProdutos);
            break;
        case 14:
            var removerServicos = new removerServico_1.default();
            removerServicos.remover(empresa.getServicos);
            break;
        case 15:
            var teste = new teste_1.Teste(empresa.getServicos, empresa.getProdutos, empresa.getClientes);
            teste.ContruirAmbiente();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
