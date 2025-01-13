// src/components/Navbar.jsx
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Inicio", "Servicios", "Ubicación", "Contáctanos"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Ajuste para compensar la altura del navbar
      const navbarHeight = 64; // altura del navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    handleCloseNavMenu();
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "grey.200",
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.95)", // Fondo semi-transparente
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo para pantallas grandes */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("inicio")}
            >
              NTECH Soluciones IT
            </Typography>

            {/* Menú móvil */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => scrollToSection(page.toLowerCase())}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo para móvil */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("inicio")}
            >
              NTECH
            </Typography>

            {/* Menú desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => scrollToSection(page.toLowerCase())}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: "primary.main",
                    display: "block",
                    "&:hover": {
                      backgroundColor: "rgba(0, 69, 139, 0.08)",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Espaciador para compensar la altura del navbar fijo */}
      <Toolbar />
    </>
  );
}

export default Navbar;
