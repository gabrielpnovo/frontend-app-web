import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

// const data = [
//   { produto: "Produto A", atual: 50, min: 30, max: 80 },
//   { produto: "Produto B", atual: 70, min: 40, max: 90 },
//   { produto: "Produto C", atual: 20, min: 15, max: 50 },
//   { produto: "Produto D", atual: 5, min: 15, max: 80 }
// ];

export default function GraficoEstoque({ produtos }) {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={produtos}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="produto" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          {/* Estoque mínimo */}
          <Bar dataKey="min" fill="red" name="Estoque Mínimo" />

          {/* Estoque atual */}
          <Bar dataKey="atual" fill="#1976d2" name="Estoque Atual" />

          {/* Estoque máximo */}
          <Bar dataKey="max" fill="orange" name="Estoque Máximo" />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
