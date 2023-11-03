import "./item-pratos.css";
function ItemPratos({ nome, categoria, preco, descricao, imagem }) {
  return (
    <div className="div-container-produtos">
      <img src={imagem} alt={nome} />
      <div className="container-padding">
        <h3>{nome}</h3>
        <p className="paragrafo">
          <span className="span-categoria">{categoria}</span>

          <span className="span-descricao">{descricao}</span>

          <span className="span-preco"> R$ {preco}</span>
        </p>
      </div>
    </div>
  );
}
export default ItemPratos;
