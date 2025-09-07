import React from "react";
import OrdensDeProducaoForm from "../components/Form/OrdensDeProducaoForm";

export default function OrdensDeProducao({ produtos, onCriarOrdem }) {
  return (
    <div>
      <OrdensDeProducaoForm onCriarOrdem={onCriarOrdem} produtos={produtos} />
    </div>
  );
}