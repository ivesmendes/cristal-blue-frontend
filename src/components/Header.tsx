import React from 'react';
import { Box, Button, Link as MuiLink, Container, useMediaQuery } from '@mui/material';
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
        backgroundColor: '#1e3a8a',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        py: 1,
        px: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', height: 60 }}>
          <Box
            component="img"
            src={HeaderImg}
            alt="Cristal Blue"
            sx={{
              height: { xs: 80, sm: 120 },
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)',
            }}
          />
        </Box>

        {/* Menu de navegação */}
        {!isMobile && (
          <Box
            component="nav"
            sx={{
              display: 'flex',
              gap: { xs: 2, md: 4 },
              alignItems: 'center',
            }}
          >
            <MuiLink
              component={Link}
              to="#"
              underline="none"
              sx={{
                color: '#fff',
                fontWeight: 500,
                fontSize: '1.1rem',
                '&:hover': { color: '#93c5fd' },
                whiteSpace: 'nowrap',
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
                color: '#fff',
                fontWeight: 500,
                fontSize: '1.1rem',
                '&:hover': { color: '#93c5fd' },
                whiteSpace: 'nowrap',
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
                color: '#fff',
                fontWeight: 500,
                fontSize: '1.1rem',
                '&:hover': { color: '#93c5fd' },
                whiteSpace: 'nowrap',
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
                color: '#fff',
                fontWeight: 500,
                fontSize: '1.1rem',
                '&:hover': { color: '#93c5fd' },
                whiteSpace: 'nowrap',
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
                backgroundColor: '#2563eb',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.1rem',
                borderRadius: 1,
                px: 4,
                py: 1.2,
                textTransform: 'none',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#1d4ed8',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
                },
              }}
              startIcon={<LogIn size={18} />}
            >
              Entrar
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Header;
