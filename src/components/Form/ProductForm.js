import React, { useState } from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

export default function ProductForm({ onAddProduto }) {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    preco: "",
    categoria: "",
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
        categoria: formData.categoria,
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

        <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary">
          Preencha os dados do novo produto
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Preço"
                name="preco"
                type="number"
                value={formData.preco}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Estoque Mínimo"
                name="min"
                type="number"
                value={formData.min}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                label="Estoque Atual"
                name="atual"
                type="number"
                value={formData.atual}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Estoque Máximo"
                name="max"
                type="number"
                value={formData.max}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={20}>
              <TextField
                label="Descrição"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                fullWidth
                multiline
                rows={3}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button type="submit" variant="contained" size="large" sx={{ px: 4, borderRadius: 2 }}>
              Criar Produto
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
