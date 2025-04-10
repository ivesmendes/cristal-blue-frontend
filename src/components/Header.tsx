import React from 'react';
import { Box, Button, Link as MuiLink, Container, useMediaQuery, Typography } from '@mui/material';
import { Home, Map, Ticket, Phone, LogIn } from 'lucide-react';
import HeaderImg from '../assets/HeaderCristalBlue.png';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        py: 1,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Logo com tipografia personalizada */}
        <Box sx={{ display: 'flex', alignItems: 'center', height: 60 }}>
          <Box
            component="img"
            src={HeaderImg}
            alt="Cristal Blue"
            sx={{
              height: { xs: 60, sm: 140 },
              objectFit: 'contain',
              mr: 2,
            }}
          />
        </Box>

        {/* Menu de navegação */}
        {!isMobile && (
          <Box
            component="nav"
            sx={{
              display: 'flex',
              gap: { xs: 1, md: 3 },
              alignItems: 'center',
            }}
          >
            <MuiLink
              component={Link}
              to="#"
              underline="none"
              sx={{
                color: '#e2e8f0',
                fontWeight: 500,
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                px: 2,
                py: 1,
                borderRadius: '6px',
                '&:hover': {
                  color: '#ffffff',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  transform: 'translateY(-2px)',
                },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Home size={18} style={{ marginRight: 8 }} />
              Home
            </MuiLink>

            <MuiLink
              component={Link}
              to="#"
              underline="none"
              sx={{
                color: '#e2e8f0',
                fontWeight: 500,
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                px: 2,
                py: 1,
                borderRadius: '6px',
                '&:hover': {
                  color: '#ffffff',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  transform: 'translateY(-2px)',
                },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Map size={18} style={{ marginRight: 8 }} />
              Rotas
            </MuiLink>

            <MuiLink
              component={Link}
              to="#"
              underline="none"
              sx={{
                color: '#e2e8f0',
                fontWeight: 500,
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                px: 2,
                py: 1,
                borderRadius: '6px',
                '&:hover': {
                  color: '#ffffff',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  transform: 'translateY(-2px)',
                },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Ticket size={18} style={{ marginRight: 8 }} />
              Comprar
            </MuiLink>

            <MuiLink
              component={Link}
              to="/contato"
              underline="none"
              sx={{
                color: '#e2e8f0',
                fontWeight: 500,
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                px: 2,
                py: 1,
                borderRadius: '6px',
                '&:hover': {
                  color: '#ffffff',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  transform: 'translateY(-2px)',
                },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Phone size={18} style={{ marginRight: 8 }} />
              Contato
            </MuiLink>

            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '1rem',
                borderRadius: '8px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)',
                transition: 'all 0.3s ease',
                ml: 2,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 12px rgba(59, 130, 246, 0.3)',
                  background: 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)',
                },
              }}
              startIcon={<LogIn size={18} />}
            >
              Login
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Header;