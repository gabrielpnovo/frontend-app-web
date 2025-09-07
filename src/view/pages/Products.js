import React from "react";
import ProductForm from "../components/Form/ProductForm";

export default function Products({ onAddProduto }) {
  return (
    <div>
      <ProductForm onAddProduto={onAddProduto} />
    </div>
  );
}
