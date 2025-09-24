import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
  Paper,
  Container
} from "@mui/material";


export default function OrdensDeProducaoForm({ produtos, onCriarOrdem }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [dataEmissao, setDataEmissao] = useState("");
  const [dataConclusao, setDataConclusao] = useState("");
  const [observacao, setObservacao] = useState("");

  const produto = produtos.find((p) => p.produto === produtoSelecionado);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaOrdem = {
      produto: produtoSelecionado,
      produtoId: produto ? produto.id : null,
      quantidade,
      dataEmissao,
      dataConclusao,
      observacao
    };

    onCriarOrdem(novaOrdem);

    console.log("Ordem criada:", novaOrdem);
    alert("Ordem de produção criada com sucesso!");

    setProdutoSelecionado("");
    setQuantidade("");
    setDataEmissao("");
    setDataConclusao("");
    setObservacao("");
  };

  return (
    <Container maxWidth="md" >
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
            Criar Ordem de Produção
        </Typography>

        {/* Seleção do Produto + estoques (campos de leitura) */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
                <TextField
                    select
                    label="Produto"
                    fullWidth
                    value={produtoSelecionado}
                    onChange={(e) => setProdutoSelecionado(e.target.value)}
                    sx={{ minWidth: 250 }}
                >
                    {produtos.map((p) => (
                    <MenuItem key={p.produto} value={p.produto}>
                        {p.produto}
                    </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={2}>
                <TextField
                    label="Estoque Atual"
                    fullWidth
                    value={produto ? produto.atual : ""}
                    disabled={!produto}
                    slotProps={{ input: { readOnly: true } }}
                />
            </Grid>

            <Grid item xs={12} md={2}>
                <TextField
                    label="Estoque Mínimo"
                    fullWidth
                    value={produto ? produto.min : ""}
                    disabled={!produto}
                    slotProps={{ input: { readOnly: true } }}
                />
            </Grid>

            <Grid item xs={12} md={2}>
                <TextField
                    label="Estoque Máximo"
                    fullWidth
                    value={produto ? produto.max : ""}
                    disabled={!produto}
                    slotProps={{ input: { readOnly: true } }}
                />
            </Grid>
        </Grid>

        <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary">
            Preencher dados da Ordem de Produção
        </Typography>

        {/* Formulário da Ordem */}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                    label="Quantidade"
                    type="number"
                    fullWidth
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    inputProps= {{ min: 0, max: 10000, step: 1 }}
                    required
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextField
                    label="Data de Emissão"
                    type="date"
                    fullWidth
                    value={dataEmissao}
                    onChange={(e) => setDataEmissao(e.target.value)}
                    // v6: substitui InputLabelProps={{ shrink: true }}
                    slotProps={{ inputLabel: { shrink: true } }}
                    required
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextField
                    label="Data de Previsão da Conclusão"
                    type="date"
                    fullWidth
                    value={dataConclusao}
                    onChange={(e) => setDataConclusao(e.target.value)}
                    slotProps={{ inputLabel: { shrink: true } }}
                    required
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                    label="Observação"
                    fullWidth
                    multiline
                    rows={3}
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                    />
                </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Button type="submit" variant="contained" size="large" sx={{ px: 4, borderRadius: 2 }}>
                        Criar Ordem de Produção
                    </Button>
                </Box>            
        </Box>
        </Paper>
    </Container>
  );
}
