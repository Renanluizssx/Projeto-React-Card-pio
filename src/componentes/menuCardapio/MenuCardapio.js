import Entradas from "../../assets/entrada.png";
import Massas from "../../assets/massa.png";
import Carnes from "../../assets/carne.png";
import Bebidas from "../../assets/bebidas.png";
import Saladas from "../../assets/salada.png";
import Sobremesas from "../../assets/sobremesa.png";
import "./MenuCardapio.css";
import { filtrarProduto } from "../servicos/TratamentoDosDados";
function MenuCardapio({ setTextoBusca, setListaProdutos }) {
  function filtro(produto) {
    setListaProdutos(filtrarProduto(produto));
    setTextoBusca("");
  }
  return (
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
  );
}
export default MenuCardapio;
