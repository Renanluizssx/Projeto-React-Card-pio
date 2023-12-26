import { useState } from "react";
import "./ListaPratos.css";
import ItemPratos from "../itemPratos/ItemPratos";
import Lupa from "../../assets/lupa.png";
import MenuCardapio from "../menuCardapio/MenuCardapio";
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
      <div className="container-input">
        <img src={Lupa} alt="Lupa" />
        <input
          type="text"
          id="text"
          value={textoBusca}
          onChange={(event) => buscaProduto(event.target.value)}
          className="text"
          placeholder="Pesquise aqui um dos pratos do nosso cardápio"
        />
      </div>

      <h2>Cardápio</h2>
      <div className="container-produtos">
        <section className="itens-produtos">
          {listaProdutos?.map((produto) => (
            <ItemPratos
              key={produto.id}
              nome={produto.nome}
              categoria={produto.categoria}
              preco={produto.preco}
              descricao={produto.descricao}
              imagem={produto.imagem}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default ListaPratos;
