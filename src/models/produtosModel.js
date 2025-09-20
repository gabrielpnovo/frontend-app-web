export function obterProdutos() {
  let produtos = []
  
  fetch('http://localhost:8080/produtos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    data.forEach(element => {
      let produto = {
        produto: element.nome,
        descricao: element.descricao,
        categoria: element.categoriaNome,
        preco: element.preco,
        atual: element.estoqueAtual,
        min: element.estoqueMinimo,
        max: element.estoqueMaximo
      }
      produtos.push(produto)
    });
  })
  .catch(error => {
    console.error('Erro ao acessar a API:', error);
  });

  return produtos;
}

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