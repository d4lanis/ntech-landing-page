import { useState } from "react";
import PropTypes from "prop-types";
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

function Navbar({ onOpenContactForm }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollToSection("inicio");
                  }}
                >
                  <Typography textAlign="center">Inicio</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollToSection("servicios");
                  }}
                >
                  <Typography textAlign="center">Servicios</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollToSection("ubicacion");
                  }}
                >
                  <Typography textAlign="center">Ubicación</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    onOpenContactForm();
                  }}
                >
                  <Typography textAlign="center">Contáctanos</Typography>
                </MenuItem>
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
              <Button
                onClick={() => scrollToSection("inicio")}
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
                Inicio
              </Button>
              <Button
                onClick={() => scrollToSection("servicios")}
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
                Servicios
              </Button>
              <Button
                onClick={() => scrollToSection("ubicacion")}
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
                Ubicación
              </Button>
              <Button
                onClick={onOpenContactForm}
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
                Contáctanos
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Espaciador para compensar la altura del navbar fijo */}
      <Toolbar />
    </>
  );
}

Navbar.propTypes = {
  onOpenContactForm: PropTypes.func.isRequired,
};

export default Navbar;
