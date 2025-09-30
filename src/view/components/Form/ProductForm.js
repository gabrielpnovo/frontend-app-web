import React, { useState } from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

export default function ProductForm({ onAddProduto, categorias }) {

  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    preco: "",
    categoria: categorias[0].nome,
    min: "",
    max: "",
    atual: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddProduto) {
      onAddProduto({
        produto: formData.nome,
        descricao: formData.descricao,
        preco: Number(formData.preco),
        categoria: Number(formData.categoria),
        min: Number(formData.min),
        max: Number(formData.max),
        atual: Number(formData.atual),
      });
    }

    setFormData({
      nome: "",
      descricao: "",
      preco: "",
      categoria: "",
      min: "",
      max: "",
      atual: "",
    });

    alert("Produto criado com sucesso!");
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Criar um Novo Produto
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          align="center"
          color="text.secondary"
        >
          Preencha os dados do novo produto
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Select
                labelId="categoria-label"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                label="Categoria"
              >
                {categorias.map((categoria) => (
                  <MenuItem
                    key={categoria.id} 
                    value={categoria.id}>
                      {categoria.nome}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={20}>
              <TextField
                label="Descrição"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Preço"
                name="preco"
                type="number"
                value={formData.preco}
                onChange={handleChange}
                inputProps={{ min: 0, max: 1000, step: 0.01 }}
                fullWidth
                required
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={16} md={4}>
              <TextField
                label="Estoque Mínimo"
                name="min"
                type="number"
                value={formData.min}
                onChange={handleChange}
                inputProps={{ min: 0, max: 10000, step: 1 }}
                fullWidth
                sx={{ minWidth: 200 }}
                required
              />
            </Grid>

            <Grid item xs={16} md={4}>
              <TextField
                label="Estoque Atual"
                name="atual"
                type="number"
                value={formData.atual}
                onChange={handleChange}
                inputProps={{ min: 0, max: 10000, step: 1 }}
                fullWidth
                sx={{ minWidth: 200 }}
                required
              />
            </Grid>

            <Grid item xs={16} md={4}>
              <TextField
                label="Estoque Máximo"
                name="max"
                type="number"
                value={formData.max}
                onChange={handleChange}
                inputProps={{ min: 0, max: 10000, step: 1 }}
                fullWidth
                sx={{ minWidth: 200 }}
                required
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ px: 4, borderRadius: 2 }}
            >
              Criar Produto
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
