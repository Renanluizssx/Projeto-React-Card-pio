import Lupa from "../../assets/lupa.png";
export default function BuscaProduto({ buscaProduto, textoBusca }) {
  return (
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
  );
}
