import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Link as MuiLink
} from '@mui/material';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';
import Header from '../components/Header';

const ContactPage = () => {
  const whatsappLink = 'https://wa.me/5586999458939?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Cristal%20Blue.';

  return (
    <>
      <Header />

      {/* Fundo com imagem e overlay */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -10,
          backgroundImage:
            "url('https://i.ytimg.com/vi/gEm7ianEYzs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5lWsq_jsy4y_gmFkg2VFQHpM33A')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 31, 63, 0.4)',
          zIndex: -9,
        }}
      />

      {/* Conteúdo principal */}
      <Box
        sx={{
          minHeight: '100vh',
          py: 6,
          px: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontFamily: 'Noto Sans',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: 800,
            width: '100%',
            p: 5,
            borderRadius: 3,
            zIndex: 2,
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom color="primary.dark">
            Fale com a Cristal Blue
          </Typography>

          <Typography variant="body1" align="center" sx={{ mb: 3, color: '#555' }}>
            Nossa equipe está pronta para te ajudar com informações, dúvidas ou sugestões.
            Fale com a gente pelo WhatsApp ou visite nossa loja física.
          </Typography>

          {/* Botão WhatsApp */}
          <Box textAlign="center" mb={3}>
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: '#25d366',
                color: 'white',
                fontWeight: 'bold',
                px: 3,
                py: 1.5,
                borderRadius: 2,
                boxShadow: 2,
                '&:hover': {
                  backgroundColor: '#1ebc5a',
                  transform: 'scale(1.03)',
                },
              }}
              startIcon={<MessageCircle size={20} />}
            >
              Falar no WhatsApp
            </Button>
          </Box>

          {/* Informações de contato */}
          <Stack spacing={1.5} sx={{ color: '#444', fontSize: 16 }}>
            <Box display="flex" alignItems="center">
              <Phone size={20} style={{ marginRight: 8 }} /> (86) 1234-5678
            </Box>
            <Box display="flex" alignItems="center">
              <Mail size={20} style={{ marginRight: 8 }} /> contato@cristalblue.com.br
            </Box>
            <Box display="flex" alignItems="center">
              <MapPin size={20} style={{ marginRight: 8 }} /> R. Fenelon Silva, 1843 - Lourival Parente
            </Box>
            <Box display="flex" alignItems="center">
              <Clock size={20} style={{ marginRight: 8 }} /> Seg - Sex: 8h às 18h | Sáb: 9h às 14h
            </Box>
          </Stack>

          {/* Instagram */}
          <Box mt={4} textAlign="center">
            <MuiLink
              href="https://www.instagram.com/cristalblueviagens_/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ display: 'inline-flex', alignItems: 'center', color: '#003366', fontWeight: 'bold' }}
            >
              <Instagram size={20} style={{ marginRight: 6 }} /> Instagram
            </MuiLink>
          </Box>

          {/* Mapa */}
          <Box mt={4} sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <iframe
              title="Localização Cristal Blue"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.4620018984565!2d-42.789704106161324!3d-5.128173995524672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e36d3b0346b1d%3A0xbde8af9ba3add6c7!2sR.%20Fenelon%20Silva%2C%201843%20-%20Lourival%20Parente%2C%20Teresina%20-%20PI%2C%2064023-290!5e0!3m2!1spt-BR!2sbr!4v1744118064848!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default ContactPage;
