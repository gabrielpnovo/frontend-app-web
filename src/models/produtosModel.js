export const produtosIniciais = [
  { produto: "Produto A", descricao: "Descricao A", categoria: "teste A", preco: 40, atual: 50, min: 30, max: 80 },
  { produto: "Produto B", descricao: "Descricao B", categoria: "teste B", preco: 60, atual: 70, min: 40, max: 90 },
  { produto: "Produto C", descricao: "Descricao C", categoria: "teste C", preco: 70,  atual: 20, min: 15, max: 50 }
];

export function adicionarProduto(produtos, novoProduto) {
  return [...produtos, novoProduto];
}

export function criarOrdem(produtos, { produto, quantidade }) {
  return produtos.map((p) =>
    p.produto === produto
      ? { ...p, atual: p.atual + Number(quantidade) }
      : p
  );
}