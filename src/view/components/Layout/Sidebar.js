import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Divider,
  Button
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

export default function Sidebar({ onLogout }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();        // atualiza estado do App
    navigate("/");     // redireciona para a página inicial
  };

  const location = useLocation(); // hook para pegar rota atual

  const menuItems = [
    { text: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { text: "Produtos", path: "/produtos", icon: <Inventory2Icon /> },
    { text: "Ordens de Produção", path: "/ordens", icon: <AssignmentIcon /> }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" }
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path; // verifica se é a rota atual

            return (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  backgroundColor: isActive ? "rgba(25, 118, 210, 0.1)" : "inherit",
                  "&:hover": { backgroundColor: "rgba(25, 118, 210, 0.2)" }
                }}
              >
                <ListItemIcon sx={{ color: isActive ? "#1976d2" : "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ color: isActive ? "#1976d2" : "inherit" }}
                />
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Botão de Logout fixo na parte inferior */}
        <Box sx={{ mt: "auto" }}>
          <Button
            variant="outlined"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            fullWidth
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
