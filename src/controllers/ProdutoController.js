import { adicionarProduto, criarOrdem, listarProdutosModel} from "../models/ProdutoModel";

export function handleAdicionarProduto(produtos, novoProduto, setProdutos) {
  setProdutos(adicionarProduto(produtos, novoProduto));
}

export function handleCriarOrdem(produtos, ordem, setProdutos) {
  setProdutos(criarOrdem(produtos, ordem));
}

export function listarProdutosService() {
  return listarProdutosModel();
}