// src/components/Services.jsx
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import BuildIcon from "@mui/icons-material/Build";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";

const services = [
  {
    title: "Reparación",
    icon: <ComputerIcon sx={{ fontSize: 40 }} />,
    description:
      "Realizamos diagnósticos exhaustivos para identificar la causa raíz del problema...",
  },
  {
    title: "Mantenimiento",
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    description:
      "Protege tu inversión con nuestros servicios de limpieza interna...",
  },
  {
    title: "Recuperación de datos",
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    description: "Recuperamos la información que no puedes perder...",
  },
  {
    title: "Eliminación de virus",
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    description: "La seguridad de tus dispositivos, nuestra prioridad...",
  },
  {
    title: "Optimización",
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    description:
      "Nos encanta la velocidad, si tu equipo está más lento de lo normal...",
  },
];

function Services() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        Nuestros Servicios
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {services.map((service) => (
          <Grid item key={service.title} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}

export default Services;
