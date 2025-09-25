import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./view/pages/Dashboard";
import Products from "./view/pages/Products";
import OrdensDeProducao from "./view/pages/OrdensDeProducao";
import Login from "./view/pages/Login";
import Layout from "./view/components/Layout/Layout";
import { adicionarProdutoController, handleCriarOrdem, listarProdutosService } from "./controllers/ProdutoController";
import { listarCategoriasController } from "./controllers/CategoriaController";
import LoginSuccess from "./view/components/Form/LoginSuccess";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem("jwt"));
  const [produtos, setProdutos] = useState(listarProdutosService());
  const [categorias] = useState(listarCategoriasController());

  // Recupera o JWT do localStorage no carregamento inicial
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);


  return (
    <Router>
      {isAuthenticated || localStorage.getItem("jwt") ? (
        <Layout onLogout={() => {
          localStorage.removeItem("jwt");
          setIsAuthenticated(false);
        }}>
          <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard produtos={produtos} />} />
            <Route path="/produtos" element={<Products onAddProduto={(novo) => adicionarProdutoController(produtos, novo, setProdutos)}
              categorias={categorias}
            />} />
            <Route path="/ordens" element={<OrdensDeProducao produtos={produtos}
              onCriarOrdem={(ordem) => handleCriarOrdem(produtos, ordem, setProdutos)} />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLoginSuccess={(jwt) => setIsAuthenticated(true)} />} />
          <Route path="/login/success" element={<LoginSuccess onLogin={(token) => setIsAuthenticated(true)} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>

  );
}

export default App;
