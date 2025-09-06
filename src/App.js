import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import OrdensDeProducao from "./pages/OrdensDeProducao";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";

const produtosIniciais = [
  { produto: "Produto A", descricao: "Descricao A", categoria: "teste A", preco: 40, atual: 50, min: 30, max: 80 },
  { produto: "Produto B", descricao: "Descricao B", categoria: "teste B", preco: 60, atual: 70, min: 40, max: 90 },
  { produto: "Produto C", descricao: "Descricao C", categoria: "teste C", preco: 70,  atual: 20, min: 15, max: 50 }
];

function App() {

  // Estado para simular autenticação
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [produtos, setProdutos] = useState(produtosIniciais);

  const adicionarProduto = (novoProduto) => {
    setProdutos((prev) => [...prev, novoProduto]);
  };

  const criarOrdem = ({ produto, quantidade }) => {
    setProdutos((prev) =>
      prev.map((p) =>
        p.produto === produto
          ? { ...p, atual: p.atual + Number(quantidade) }
          : p
      )
    );
  };

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
              element={<Products onAddProduto={adicionarProduto} />}
            />
            <Route
              path="/ordens"
              element={<OrdensDeProducao produtos={produtos} onCriarOrdem={criarOrdem} />}
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
