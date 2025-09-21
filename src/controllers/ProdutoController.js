import { adicionarProdutoModel, criarOrdem, listarProdutosModel} from "../models/ProdutoModel";

export function adicionarProdutoController(produtos, novoProduto, setProdutos) {
  setProdutos(adicionarProdutoModel(produtos, novoProduto));
}

export function handleCriarOrdem(produtos, ordem, setProdutos) {
  setProdutos(criarOrdem(produtos, ordem));
}

export function listarProdutosService() {
  return listarProdutosModel();
}