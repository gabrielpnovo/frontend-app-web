import { adicionarProduto, criarOrdem, produtosIniciais} from "../models/produtosModel";

export function handleAdicionarProduto(produtos, novoProduto, setProdutos) {
  setProdutos(adicionarProduto(produtos, novoProduto));
}

export function handleCriarOrdem(produtos, ordem, setProdutos) {
  setProdutos(criarOrdem(produtos, ordem));
}

export function getProdutosIniciais() {
  return produtosIniciais
}