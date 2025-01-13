// src/components/ContactForm.jsx
import { Container, TextField, Button, Box, Typography } from "@mui/material";

function ContactForm() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: { xs: 4, sm: 6, md: 8 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
            mb: { xs: 3, sm: 4 },
          }}
        >
          Contáctanos
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            mt: { xs: 2, sm: 3 },
            "& .MuiTextField-root": { mb: 2 },
          }}
        >
          <TextField
            required
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            autoComplete="name"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          />
          <TextField
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
          />
          <TextField
            required
            fullWidth
            id="phone"
            label="Teléfono"
            name="phone"
            autoComplete="tel"
          />
          <TextField
            required
            fullWidth
            name="message"
            label="Mensaje"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Enviar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactForm;
