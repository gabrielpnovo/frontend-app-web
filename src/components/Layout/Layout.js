// src/components/Layout/Layout.js
import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Sidebar from "./Sidebar"; // ajusta se o nome/paths forem diferentes

const drawerWidth = 240; // mantenha o mesmo valor utilizado no Sidebar

export default function Layout({ children, onLogout }) {
  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar no topo */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Sistema de Gestão
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar - repassa onLogout para o componente */}
      <Sidebar onLogout={onLogout} />

      {/* Área principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        {/* Espaço para não ficar embaixo do AppBar */}
        <Toolbar />
        {/* Conteúdo das páginas */}
        {children}
      </Box>
    </Box>
  );
}
