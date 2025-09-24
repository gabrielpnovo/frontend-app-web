import { adicionarProdutoModel, listarProdutosModel} from "../models/ProdutoModel";

export function adicionarProdutoController(produtos, novoProduto, setProdutos) {
  setProdutos(adicionarProdutoModel(produtos, novoProduto));
}

export function listarProdutosService() {
  return listarProdutosModel();
}