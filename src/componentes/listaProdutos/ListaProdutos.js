import ItemPratos from "../itemPratos/ItemPratos";
import "./ListaProdutos.css";
export default function ListaProdutos({ listaProdutos }) {
  return (
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
  );
}
