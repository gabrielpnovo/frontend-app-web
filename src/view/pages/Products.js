import React from "react";
import ProductForm from "../components/Form/ProductForm";

export default function Products({ onAddProduto, categorias }) {
  return (
    <div>
      <ProductForm onAddProduto={onAddProduto} categorias={categorias}/> 
    </div>
  );
}
