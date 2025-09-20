export function listarCategoriasModel() {
  let categorias = []
  
  fetch('http://localhost:8080/categorias')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    data.forEach(element => {
      let categoria = {
        id: element.id,
        nome: element.nome
      }
      categorias.push(categoria)
    });
  })
  .catch(error => {
    console.error('Erro ao acessar a API:', error);
  });

  return categorias;
}