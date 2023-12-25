import { produtos } from "../../colecaoDeDados/Produtos";
export const filtrarProduto = (plataforma) => {
  return produtos.filter((produto) => produto.categoria === plataforma);
};
export const buscar = (textoDigitado) => {
  return produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
  );
};
export const retornaProdutos = () => produtos;
