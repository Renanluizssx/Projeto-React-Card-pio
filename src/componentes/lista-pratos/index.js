import { useState } from "react";
import "./lista-pratos.css";
import ItemPratos from "../item-pratos";
import Entradas from "../../Assets/entrada.png";
import Massas from "../../Assets/massa.png";
import Carnes from "../../Assets/carne.png";
import Bebidas from "../../Assets/bebidas.png";
import Saladas from "../../Assets/salada.png";
import Sobremesas from "../../Assets/sobremesa.png";
import Lupa from "../../Assets/lupa.png";
import { filtrarProduto, retornaProdutos, buscar } from "../serviços";

function Pratos() {
  const [listaProdutos, setListaProdutos] = useState(
    filtrarProduto("Entradas")
  );
  const [textoBusca, setTextoBusca] = useState("");
  function filtro(produto) {
    setListaProdutos(filtrarProduto(produto));
    setTextoBusca("");
  }

  function buscaProduto(textoDigitado) {
    console.log(textoDigitado.length);
    if (textoDigitado.length >= 3) {
      setListaProdutos(buscar(textoDigitado));
      setTextoBusca(textoDigitado);
      console.log(buscar(textoDigitado));
    } else {
      setListaProdutos(retornaProdutos());
      setTextoBusca(textoDigitado);
    }
  }
  return (
    <main className="container-menus">
      <nav>
        <div onClick={() => filtro("Entradas")} className="massas menus">
          <img src={Entradas} alt="Entrada" />
          <span>Entradas</span>
        </div>
        <div onClick={() => filtro("Massas")} className="massas menus">
          <img src={Massas} alt="Entrada" />
          <span>Massas</span>
        </div>
        <div onClick={() => filtro("Carnes")} className="carnes menus">
          <img src={Carnes} alt="Entrada" />
          <span>Carnes</span>
        </div>
        <div onClick={() => filtro("Bebidas")} className="bebidas menus">
          <img src={Bebidas} alt="Entrada" />
          <span>Bebidas</span>
        </div>
        <div onClick={() => filtro("Saladas")} className="saladas menus">
          <img src={Saladas} alt="Entrada" />
          <span>Saladas</span>
        </div>
        <div onClick={() => filtro("Sobremesas")} className="sobremesas menus">
          <img src={Sobremesas} alt="Entrada" />
          <span>Sobremesas</span>
        </div>
      </nav>

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
          {listaProdutos.map((produto) => (
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

export default Pratos;
