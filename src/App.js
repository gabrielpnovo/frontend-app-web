import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./view/pages/Dashboard";
import Products from "./view/pages/Products";
import OrdensDeProducao from "./view/pages/OrdensDeProducao";
import Login from "./view/pages/Login";
import Layout from "./view/components/Layout/Layout";
import { handleAdicionarProduto, handleCriarOrdem, getProdutosIniciais} from "./controllers/produtosController";




function App() {

  // Estado para simular autenticação
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [produtos, setProdutos] = useState(getProdutosIniciais());

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
              element={<Products onAddProduto={(novo) => handleAdicionarProduto(produtos, novo, setProdutos)} /> }
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
