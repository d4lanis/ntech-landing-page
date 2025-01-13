import { Box, Container, Typography, Button } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        minHeight: { xs: "100vh", md: "100vh" }, // Altura mínima responsive
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "white", // Texto blanco para contraste
        textAlign: "center",
        backgroundImage: "url('/ntech.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        pt: { xs: 8, sm: 10, md: 12 }, // Compensar altura del Navbar fijo
        pb: { xs: 4, sm: 6, md: 6 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Capa oscura para legibilidad
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2, // Asegura que el contenido esté sobre la capa oscura
        }}
      >
        {/* Título principal */}
        <Typography
          component="h1"
          variant="h2"
          color="white"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
            lineHeight: { xs: 1.2, sm: 1.3 },
            fontWeight: 700,
          }}
        >
          Reparación y Mantenimiento de Software y Hardware
        </Typography>

        {/* Descripción */}
        <Typography
          variant="h5"
          color="white"
          paragraph
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            px: { xs: 2, sm: 0 },
          }}
        >
          Ofrecemos soluciones de primer nivel en reparación, mantenimiento y
          optimización de PCs. Tus pesadillas, nuestros retos.
        </Typography>

        {/* Botón de acción */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              py: { xs: 1.5, sm: 2 },
              px: { xs: 4, sm: 6 },
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Cotiza aquí
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;