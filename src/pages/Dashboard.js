import React, { useState } from "react";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Select, MenuItem } from "@mui/material";
import GraficoEstoque from "../components/Charts/GraficoEstoque";

export default function Dashboard({ produtos }) {

  const [filtros, setFiltros] = useState({
    produto: "Todos",
    categoria: "Todas",
    status: "Todos",
  });

  // Obter lista única de produtos e categorias para os filtros
  const produtosUnicos = [...new Set(produtos.map((p) => p.produto))];
  const categoriasUnicas = [...new Set(produtos.map((p) => p.categoria || "Sem categoria"))];

  // Lógica de filtro
  const produtosFiltrados = produtos.filter((p) => {
    const status =
      p.atual < p.min
        ? "Abaixo do mínimo"
        : p.atual > p.max
        ? "Acima do máximo"
        : "OK";

    return (
      (filtros.produto === "Todos" || filtros.produto === p.produto) &&
      (filtros.categoria === "Todas" || filtros.categoria === (p.categoria || "Sem categoria")) &&
      (filtros.status === "Todos" || filtros.status === status)
    );
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Gráfico */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Estoque de Produtos</Typography>
        <GraficoEstoque produtos={produtosFiltrados}/>
      </Paper>

      {/* Tabela */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Produtos e Estoques
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Produto</strong></TableCell>
                <TableCell align="center"><strong>Descrição</strong></TableCell>
                <TableCell align="center"><strong>Categoria</strong></TableCell>
                <TableCell align="center"><strong>Preço</strong></TableCell>
                <TableCell align="center"><strong>Estoque Atual</strong></TableCell>
                <TableCell align="center"><strong>Estoque Mínimo</strong></TableCell>
                <TableCell align="center"><strong>Estoque Máximo</strong></TableCell>
                <TableCell align="center"><strong>Status</strong></TableCell>
              </TableRow>

              {/* Linha de filtros */}
              <TableRow>
                {/* Filtro Produtos */}
                <TableCell>
                  <Select
                    variant="standard"
                    placeholder="Filtrar produto"
                    value={filtros.produto}
                    onChange={(e) =>
                      setFiltros({ ...filtros, produto: e.target.value })
                    }
                    fullWidth
                  >
                  <MenuItem value="Todos">Todos</MenuItem>
                    {produtosUnicos.map((nome) => (
                      <MenuItem key={nome} value={nome}>
                        {nome}
                      </MenuItem>
                  ))}
                  </Select >
                </TableCell>
                <TableCell />

                {/* Filtro Categoria */}
                <TableCell>
                  <Select
                    variant="standard"
                    value={filtros.categoria}
                    onChange={(e) =>
                      setFiltros({ ...filtros, categoria: e.target.value })
                    }
                    fullWidth
                  >
                    <MenuItem value="Todas">Todas</MenuItem>
                    {categoriasUnicas.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell >
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />

                {/* Filtro Status */}
                <TableCell align="center">
                  <Select
                    variant="standard"
                    value={filtros.status}
                    onChange={(e) =>
                      setFiltros({ ...filtros, status: e.target.value })
                    }
                    fullWidth
                  >
                    <MenuItem value="Todos">Todos</MenuItem>
                    <MenuItem value="OK">OK</MenuItem>
                    <MenuItem value="Abaixo do mínimo">Abaixo do mínimo</MenuItem>
                    <MenuItem value="Acima do máximo">Acima do máximo</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {produtosFiltrados.map((p) => {
                let status = "";
                let color = "default";

                if (p.atual < p.min) {
                  status = "Abaixo do mínimo";
                  color = "error";
                } else if (p.atual > p.max) {
                  status = "Acima do máximo";
                  color = "warning";
                } else {
                  status = "OK";
                  color = "success";
                }
                return (
                  <TableRow key={p.produto}>
                    <TableCell>{p.produto}</TableCell>
                    <TableCell align="center">{p.descricao}</TableCell>
                    <TableCell align="center">{p.categoria}</TableCell>
                    <TableCell align="center">{p.preco}</TableCell>
                    <TableCell align="center">{p.atual}</TableCell>
                    <TableCell align="center">{p.min}</TableCell>
                    <TableCell align="center">{p.max}</TableCell>
                    <TableCell align="center">
                      <Chip label={status} color={color} size="small" />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
