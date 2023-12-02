import { RG } from "./rg.dto";
import { Telefone } from "./telefone.dto";

export class CreateClienteDto {
  nome: string;
  nomeSocial: string;
  genero: string;
  cpf: number;
  rgs : RG[]
  telefones : Telefone[];
  dataCadastro: Date;
  quantidade_produtos_consumidos: number;
  quantidade_servicos_consumidos: number;
  total_gasto_produto: number;
  total_gasto_servico: number;
  total_gasto: number;
}
