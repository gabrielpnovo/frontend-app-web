import React from "react";
import { Avatar, Container, Paper, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginForm from "../components/Form/LoginForm";

export default function Login({ onLoginSuccess }) {
  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          Login
        </Typography>

        {/* Formulário separado */}
        <LoginForm onLoginSuccess={onLoginSuccess} />
        
      </Paper>
    </Container>
  );
}
