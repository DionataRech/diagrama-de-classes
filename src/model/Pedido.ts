import { ItemType, PedidoType } from "../types";

class Pedido {
  itens: ItemType[];
  valorTotal: number;

  constructor(item: PedidoType) {
    this.itens = item.itens;
    this.valorTotal = item.valorTotal;
  }
}

export default Pedido;
