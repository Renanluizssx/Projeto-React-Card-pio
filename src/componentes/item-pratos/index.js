import "./item-pratos.css";
function ItemPratos({nome, categoria, preco, descricao, imagem}) {
    return(
        <div className="div-container-produtos">
            <img src= {imagem} alt={nome}/>
            {nome}
           <p> {categoria}<br/>
            {descricao}<br/>
           <span> R$ {preco}</span></p>
        </div>
    )
}
export default ItemPratos;