export function gerarOrdemProducaoModel(ordem) {
  const ordemAtualizado = {
    produtoId: ordem.produtoId,
    dataEmissao: ordem.dataEmissao,
    dataPrevisao: ordem.dataConclusao,
    quantidade: ordem.quantidade,
    observacao: ordem.observacao,
  };

  console.log("Enviando para o backend:", ordemAtualizado);

  fetch("http://localhost:8080/OrdemProducao", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ordemAtualizado),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Sucesso:", data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });

  
}
