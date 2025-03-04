import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Location from './components/Location';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [openContactForm, setOpenContactForm] = useState(false);

  const handleOpenContactForm = () => setOpenContactForm(true);
  const handleCloseContactForm = () => setOpenContactForm(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Asegura altura mínima de toda la ventana
        }}
      >
        <Navbar onOpenContactForm={handleOpenContactForm} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box id="inicio">
            <Hero onOpenContactForm={handleOpenContactForm} />
          </Box>
          <Box id="servicios">
            <Services />
          </Box>
          <Box id="ubicacion">
            <Location />
          </Box>
        </Box>
        <Footer />
      </Box>
      <ContactForm open={openContactForm} onClose={handleCloseContactForm} />
    </ThemeProvider>
  );
}

export default App;
