// src/App.jsx
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Button } from '@mui/material';
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
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Hero id="inicio" onOpenContactForm={handleOpenContactForm} />
          <Services id="servicios" />
          <Location id="ubicacion" />
          <Button onClick={handleOpenContactForm}>Contáctanos</Button>
        </Box>
        <Footer />
      </Box>
      <ContactForm open={openContactForm} onClose={handleCloseContactForm} />
    </ThemeProvider>
  );
}

export default App;