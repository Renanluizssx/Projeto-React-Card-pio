import { useState } from "react";
import "./ListaPratos.css";

import ListaProdutos from "../listaProdutos/ListaProdutos";
import MenuCardapio from "../menuCardapio/MenuCardapio";
import BuscaProduto from "../entradaDeProdutos/BuscaProdutos";
import {
  filtrarProduto,
  retornaProdutos,
  buscar,
} from "../servicos/TratamentoDosDados";

function ListaPratos() {
  const [listaProdutos, setListaProdutos] = useState(
    filtrarProduto("Entradas")
  );
  const [textoBusca, setTextoBusca] = useState("");
  function buscaProduto(textoDigitado) {
    if (textoDigitado.length >= 3) {
      setListaProdutos(buscar(textoDigitado));
      setTextoBusca(textoDigitado);
    } else {
      setListaProdutos(retornaProdutos());
      setTextoBusca(textoDigitado);
    }
  }

  return (
    <main className="container-main">
      <MenuCardapio
        setListaProdutos={setListaProdutos}
        setTextoBusca={setTextoBusca}
      />
      <BuscaProduto buscaProduto={buscaProduto} textoBusca={textoBusca} />
      <ListaProdutos listaProdutos={listaProdutos} />
    </main>
  );
}

export default ListaPratos;
