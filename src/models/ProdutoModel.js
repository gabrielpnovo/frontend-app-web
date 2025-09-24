export function listarProdutosModel() {
  let produtos = [];

  fetch("http://localhost:8080/produtos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
        let produto = {
          id: element.id,
          produto: element.nome,
          descricao: element.descricao,
          categoria: element.categoriaNome,
          preco: element.preco,
          atual: element.estoqueAtual,
          min: element.estoqueMinimo,
          max: element.estoqueMaximo,
        };
        produtos.push(produto);
      });
    })
    .catch((error) => {
      console.error("Erro ao acessar a API:", error);
    });

  return produtos;
}

export function adicionarProdutoModel(produtos, produto) {
  
  const produtoAtualizado = {
    nome: produto.produto,
    descricao: produto.descricao,
    preco: produto.preco,
    estoqueMaximo: produto.max,
    estoqueMinimo: produto.min,
    estoqueAtual: produto.atual,
    categoriaId: produto.categoria,
  };

  console.log("Produto a ser enviado:", produtoAtualizado);

  // Realizando o POST
  fetch("http://localhost:8080/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produtoAtualizado),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Sucesso:", data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });

    return [...produtos, produto];
}
