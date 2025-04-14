import React from 'react';
import { Box, Container, List, ListItem, ListItemText, ListItemIcon, Typography, Stack } from '@mui/material';
import { WhatsApp, Phone, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0b1354', color: 'white', py: 6, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Cristal Blue
            </Typography>
            <List dense>
              {['Passagens de ônibus', 'Blog', 'Notícias', 'Passagens com desconto', 'Cupom de desconto', 'Black Friday'].map((item) => (
                <ListItem key={item} sx={{ px: 0 }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Rodoviárias
            </Typography>
            <List dense>
              {['São Paulo - SP', 'Rio de Janeiro - RJ', 'Goiânia - GO', 'Brasília - DF', 'Florianópolis - SC', 'Campinas - SP', 'Cuiabá - MT', 'Todas as rodoviárias'].map((item) => (
                <ListItem key={item} sx={{ px: 0 }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Informações
            </Typography>
            <List dense>
              {['Guichê Virtual', 'Imprensa', 'Seja um parceiro', 'Trabalhe conosco', 'Atendimento', 'Termos de uso', 'Política de privacidade', 'Quem somos'].map((item) => (
                <ListItem key={item} sx={{ px: 0 }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Precisa de ajuda?
            </Typography>
            <List dense>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 36, color: 'white' }}>
                  <WhatsApp />
                </ListItemIcon>
                <ListItemText primary="Compre pelo WhatsApp" />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 36, color: 'white' }}>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary="Atendimento ao Cliente" />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 36, color: 'white' }}>
                  <Email />
                </ListItemIcon>
                <ListItemText primary="Fale conosco" />
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
