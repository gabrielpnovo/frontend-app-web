import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./view/pages/Dashboard";
import Products from "./view/pages/Products";
import OrdensDeProducao from "./view/pages/OrdensDeProducao";
import Login from "./view/pages/Login";
import Layout from "./view/components/Layout/Layout";
import { handleAdicionarProduto, handleCriarOrdem, listarProdutosService} from "./controllers/ProdutoController";
import { listarCategoriasService } from "./controllers/CategoriaController";




function App() {

  // Estado para simular autenticação
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [produtos, setProdutos] = useState(listarProdutosService());
  const [categorias] = useState(listarCategoriasService()); // Estado para categorias

  return (
    <Router>

      {isAuthenticated ? (
        <Layout onLogout={() => setIsAuthenticated(false)}>
          <Routes>

            <Route 
              path="/"
              element={<Dashboard produtos={produtos} />} 
            />

            <Route 
              path="/produtos"
              element={<Products onAddProduto={(novo) => handleAdicionarProduto(produtos, novo, setProdutos)} categorias={categorias}/> }
            />

            <Route
              path="/ordens"
              element={ <OrdensDeProducao produtos={produtos} onCriarOrdem={(ordem) => handleCriarOrdem(produtos, ordem, setProdutos)} />}
            />
            
          </Routes>
        </Layout>
      ) : (
        <Routes>
          {/* Passa onLoginSuccess para Login */}
          <Route path="*" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
