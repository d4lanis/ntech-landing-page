// src/components/Footer.jsx
import { useState } from 'react';
import { Box, Button, Container, Typography, Link, Grid, IconButton, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

function Footer() {
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const handleOpenTerms = () => setOpenTerms(true);
  const handleCloseTerms = () => setOpenTerms(false);

  const handleOpenPrivacy = () => setOpenPrivacy(true);
  const handleClosePrivacy = () => setOpenPrivacy(false);

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
              href="https://www.facebook.com/ntechsolucionesit"
              target="_blank"
              sx={{ color: 'white', mx: 0.5 }}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/ntech.soluciones/"
              target="_blank"
              sx={{ color: 'white', mx: 0.5 }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://wa.me/+528441461714"
              target="_blank"
              sx={{ color: 'white', mx: 0.5 }}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              href="mailto:ntech.soluciondigital@gmail.com"
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
              Teléfono: <Link href="https://wa.me/+528441461714" color="inherit" target="_blank">8441461714</Link>
            </Typography>
            <Typography variant="body2" color='white'>
              Ubicación: Saltillo, Coahuila, México
            </Typography>
          </Grid>

          {/* Enlaces legales */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Link onClick={handleOpenTerms} color="inherit" underline="hover" sx={{ mx: 1, cursor: 'pointer' }}>
              Términos y Condiciones
            </Link>
            <Link onClick={handleOpenPrivacy} color="inherit" underline="hover" sx={{ mx: 1, cursor: 'pointer' }}>
              Aviso de Privacidad
            </Link>
          </Grid>
        </Grid>

        {/* Segunda fila: Derechos reservados */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color='white'>
            © {new Date().getFullYear()} N-TECH Soluciones IT. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>

      {/* Modal Términos y Condiciones */}
      <Dialog open={openTerms} onClose={handleCloseTerms} maxWidth="md" fullWidth>
        <DialogTitle>
          Términos y Condiciones
          <IconButton
            aria-label="close"
            onClick={handleCloseTerms}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Bienvenido a <strong>NTECH Soluciones IT</strong>. Al acceder y utilizar nuestro sitio web, usted acepta cumplir con los siguientes Términos y Condiciones, los cuales están diseñados conforme a la <strong>Ley Federal de Protección al Consumidor</strong> y demás normativas aplicables en los Estados Unidos Mexicanos.
          </Typography>
          <Typography variant="h6">1. Objeto</Typography>
          <Typography variant="body2" gutterBottom>
            Estos Términos y Condiciones regulan el uso del sitio web y los servicios de reparación de computadoras y laptops ofrecidos por <strong>NTECH Soluciones IT</strong>.
          </Typography>
          <Typography variant="h6">2. Servicios Ofrecidos</Typography>
          <Typography variant="body2" gutterBottom>
            Ofrecemos diagnóstico, mantenimiento, reparación y optimización de equipos de cómputo. Nos comprometemos a brindar servicios profesionales y garantizar la calidad en cada reparación.
          </Typography>
          <Typography variant="h6">3. Condiciones de Uso</Typography>
          <Typography variant="body2" gutterBottom>
            <ul>
              <li>El usuario se compromete a proporcionar información veraz y actualizada al solicitar un servicio.</li>
              <li>No nos hacemos responsables por fallas derivadas de daños previos o manipulación por terceros ajenos a nuestros técnicos.</li>
              <li>Nos reservamos el derecho de rechazar servicios que impliquen manipulación de software no licenciado o ilegal.</li>
            </ul>
          </Typography>
          <Typography variant="h6">4. Garantía</Typography>
          <Typography variant="body2" gutterBottom>
            <ul>
              <li>Se ofrece una garantía de <strong>30 días</strong> sobre las reparaciones realizadas, siempre que no haya intervención de terceros ni daños adicionales tras la entrega del equipo.</li>
              <li>La garantía no cubre fallas derivadas de virus informáticos, software de terceros o mal uso del equipo.</li>
            </ul>
          </Typography>
          <Typography variant="h6">5. Pagos y Facturación</Typography>
          <Typography variant="body2" gutterBottom>
            <ul>
              <li>Los precios de los servicios serán informados previamente al cliente y deberán ser pagados en su totalidad antes de la entrega del equipo.</li>
              <li>En caso de requerir factura, el usuario deberá proporcionar los datos fiscales correspondientes al momento de solicitar el servicio.</li>
            </ul>
          </Typography>
          <Typography variant="h6">6. Responsabilidad</Typography>
          <Typography variant="body2" gutterBottom>
            <ul>
              <li><strong>NTECH Soluciones IT</strong> no se hace responsable por pérdida de información durante el proceso de reparación. Se recomienda realizar respaldos antes de solicitar servicio.</li>
              <li>No nos responsabilizamos por daños ocasionados por uso indebido del equipo tras la entrega.</li>
            </ul>
          </Typography>
          <Typography variant="h6">7. Protección de Datos</Typography>
          <Typography variant="body2" gutterBottom>
            El usuario acepta que sus datos personales sean tratados conforme a nuestro <strong>Aviso de Privacidad</strong>, disponible en nuestro sitio web.
          </Typography>
          <Typography variant="h6">8. Modificaciones</Typography>
          <Typography variant="body2" gutterBottom>
            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor al momento de su publicación en el sitio web.
          </Typography>
          <Typography variant="h6">9. Jurisdicción</Typography>
          <Typography variant="body2" gutterBottom>
            Para cualquier controversia derivada del uso de nuestros servicios, ambas partes acuerdan someterse a la jurisdicción de los tribunales de <strong>Saltillo, Coahuila, México</strong>.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Si tiene alguna duda sobre estos términos, puede contactarnos a través de nuestro correo electrónico o en nuestra dirección física disponible en nuestro sitio web.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTerms} color="primary" variant="contained">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal Aviso de Privacidad */}
      <Dialog open={openPrivacy} onClose={handleClosePrivacy} maxWidth="md" fullWidth>
        <DialogTitle>
          Aviso de Privacidad
          <IconButton
            aria-label="close"
            onClick={handleClosePrivacy}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            En <strong>NTECH Soluciones IT</strong>, estamos comprometidos con la protección de sus datos personales. Este Aviso de Privacidad explica cómo recopilamos, usamos y protegemos su información personal al utilizar nuestros servicios de reparación de computadoras y laptops, en cumplimiento con la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>.
          </Typography>
          <Typography variant="h6">1. Información que recopilamos</Typography>
          <Typography variant="body2" gutterBottom>
            Podemos recopilar datos personales como su nombre, dirección de correo electrónico y datos de contacto con el fin de brindarle nuestros servicios.
          </Typography>
          <Typography variant="h6">2. Uso de la información</Typography>
          <Typography variant="body2" gutterBottom>
            Los datos personales recopilados serán utilizados para:
            <ul>
              <li>Proporcionar y mejorar nuestros servicios.</li>
              <li>Contactarlo en relación con solicitudes o reparaciones.</li>
              <li>Cumplir con obligaciones legales aplicables.</li>
            </ul>
          </Typography>
          <Typography variant="h6">3. Protección de los datos</Typography>
          <Typography variant="body2" gutterBottom>
            Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger su información contra el acceso no autorizado, alteración o uso indebido.
          </Typography>
          <Typography variant="h6">4. Derechos ARCO</Typography>
          <Typography variant="body2" gutterBottom>
            Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al tratamiento de sus datos personales. Para ejercer estos derechos, puede contactarnos a través de nuestro correo electrónico oficial.
          </Typography>
          <Typography variant="h6">5. Cambios en el Aviso de Privacidad</Typography>
          <Typography variant="body2" gutterBottom>
            Nos reservamos el derecho de modificar este Aviso de Privacidad en cualquier momento. Cualquier cambio será publicado en nuestro sitio web.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Para cualquier consulta o aclaración sobre este Aviso de Privacidad, puede contactarnos a través de nuestro correo electrónico o en nuestra dirección física disponible en nuestro sitio web.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePrivacy} color="primary" variant="contained">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Footer;