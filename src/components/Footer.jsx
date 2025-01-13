// src/components/Footer.jsx
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* Primera fila: Redes sociales, Contacto, Legal */}
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          {/* Redes sociales */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <IconButton
              href="#"
              target="_blank"
              sx={{ color: 'white', mx: 0.5 }}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              sx={{ color: 'white', mx: 0.5 }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              sx={{ color: 'white', mx: 0.5 }}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              sx={{ color: 'white', mx: 0.5 }}
              aria-label="Email"
            >
              <EmailIcon />
            </IconButton>
          </Grid>

          {/* Información de contacto */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color='white'>
              Teléfono: <Link href="tel:+528441461714" color="inherit">+52 844 146 1714</Link>
            </Typography>
            <Typography variant="body2" color='white'>
              Ubicación: Saltillo, Coahuila, México
            </Typography>
          </Grid>

          {/* Enlaces legales */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Términos y Condiciones
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Aviso de Privacidad
            </Link>
          </Grid>
        </Grid>

        {/* Segunda fila: Derechos reservados */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color='white'>
            © {new Date().getFullYear()} NTECH-Soluciones IT. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;