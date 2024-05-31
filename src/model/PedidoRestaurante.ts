import { CardapioType } from "../types";
import Cardapio from "./Cardapio";

class PedidoRestaurante {
  private pizzas: Cardapio[];
  valorTotal: number;

  constructor() {
    this.pizzas = [];
    this.valorTotal = 0;
  }
  adicionarPizza(pizza: CardapioType) {
    this.pizzas.push(pizza);
  }
  imprimirPedido() {
    console.log(this.pizzas);
  }
  valorTotalPedido() {
    this.pizzas.forEach((pizza) => {
      this.valorTotal += pizza.valor;
    });
    console.log(`O valor total a pagar é ${this.valorTotal}`);
  }
}

export default PedidoRestaurante;
