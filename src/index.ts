import Item from "./model/Item";
import Pedido from "./model/Pedido";
import Cardapio from "./model/Cardapio";
import PedidoRestaurante from "./model/PedidoRestaurante";

const item1 = new Item({
  descricao: "Alo Rafa ",
  nome: "Henrique",
  valor: 100,
});

// const pedido1 = new Pedido({ itens: item1, valorTotal: 200 });

const cardapio1 = new Cardapio({
  sabor: "calabresa",
  valor: 80,
});

const cardapio2 = new Cardapio({
  sabor: "chocolate",
  valor: 100,
});

const pedido1 = new PedidoRestaurante();
pedido1.adicionarPizza(cardapio1);
pedido1.adicionarPizza(cardapio2);
pedido1.imprimirPedido();
pedido1.valorTotalPedido();

console.log(item1);
