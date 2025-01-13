// src/components/Location.jsx
import { Container, Typography, Box, Grid } from "@mui/material";

function Location() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          Ubicación
        </Typography>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
              >
                Dirección:
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                236, Zona Centro, 25000 Saltillo, Coah.
              </Typography>

              <Typography
                variant="h6"
                sx={{ mt: 2, fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
              >
                Teléfono:
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                +52 844 146 1714
              </Typography>

              <Typography
                variant="h6"
                sx={{ mt: 2, fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
              >
                Horario de atención:
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                Lunes a Viernes: 5:30 PM - 8:30 PM
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                Sábado: 10:30 AM - 8:30 PM
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { xs: "300px", sm: "400px" },
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.611941374289!2d-100.9927442246773!3d25.417797177569593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868873241d207c03%3A0xf8372bfbdab6f853!2sN-TECH%20Soluciones%20IT!5e0!3m2!1ses!2smx!4v1736289191491!5m2!1ses!2smx"
                  width="600"
                  height="450"
                  style={{border: 0}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Location;
