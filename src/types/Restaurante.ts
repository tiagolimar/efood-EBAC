import { Produto } from "./Produto";

export type Restaurante = {
    avaliacao: number;
    capa: string;
    cardapio: Produto[];
    descricao: string;
    destacado: boolean;
    id: number;
    tipo: string;
    titulo: string;
}