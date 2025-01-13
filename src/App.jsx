// src/App.jsx
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Location from './components/Location';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
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
          <Hero id="inicio" />
          <Services id="servicios" />
          <Location id="ubicacion" />
          <ContactForm id="contacto" />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;