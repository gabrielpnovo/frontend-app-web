import React, { createContext, useContext, useState, useEffect } from "react";
import { listarProdutosService } from "../controllers/ProdutoController";

// Criando o contexto
const ProdutoContext = createContext();

// Provider: quem fornece os dados
export function ProdutoProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Carrega os produtos do backend na inicialização
    const lista = listarProdutosService();
    setProdutos(lista);
  }, []);

  return (
    <ProdutoContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutoContext.Provider>
  );
}

// Hook para usar o contexto facilmente
export function useProdutos() {
  return useContext(ProdutoContext);
}