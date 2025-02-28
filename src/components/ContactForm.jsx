import PropTypes from 'prop-types';
import { TextField, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function ContactForm({ open, onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Contáctanos
        <IconButton
          aria-label="close"
          onClick={onClose}
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
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
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
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Cancelar
        </Button>
        <Button type="submit" color="primary" variant="contained">
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
ContactForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactForm;
