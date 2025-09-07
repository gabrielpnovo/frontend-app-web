import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

export default function LoginForm({ onLoginSuccess }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Validação simples (simulação)
    if (usuario === "admin" && senha === "123") {
      onLoginSuccess(); // Notifica App.js
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
    onLoginSuccess(); // Simulação para login via Google
  };

  return (
    <Box component="form" sx={{ mt: 1, width: "100%" }}>
      <TextField
        margin="normal"
        fullWidth
        label="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={handleLogin}
      >
        Entrar
      </Button>

      <Divider sx={{ my: 2 }}>ou</Divider>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
      >
        Autenticar pelo Google
      </Button>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Não tem conta?{" "}
        <Link href="#" underline="hover">
          Criar Conta
        </Link>
      </Typography>
    </Box>
  );
}
