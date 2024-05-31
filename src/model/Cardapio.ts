import { CardapioType } from "../types";

class Cardapio {
  sabor: string;
  valor: number;

  constructor(data: CardapioType) {
    this.sabor = data.sabor;
    this.valor = data.valor;
  }
}

export default Cardapio;
