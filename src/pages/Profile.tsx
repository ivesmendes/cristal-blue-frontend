import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Divider, 
  Button,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Edit, Lock, CreditCard, Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        pt: '80px', // To account for fixed header
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
      }}
    >
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Profile Header */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
            color: 'white',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                mr: 3,
                bgcolor: '#3b82f6',
                fontSize: '2rem',
              }}
            >
              GC
            </Avatar>
            <Box>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
                Guilherme
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, mt: 0.5 }}>
                guiribaps4@gmail.com
              </Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<Edit />}
              sx={{
                ml: 'auto',
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Editar dados
            </Button>
          </Box>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* My Passages Section */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#0f172a' }}>
          Minhas passagens
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#64748b' }}>
          Aqui você pode visualizar suas últimas passagens compradas.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 3,
            mb: 6,
          }}
        >
          {/* Notifications Card */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows[6],
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Star color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Notificações
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
              Receba conteúdo sobre as qualificações que você deseja e se desinscreva do resto.
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: '#e2e8f0',
                color: '#0f172a',
                '&:hover': {
                  borderColor: '#cbd5e1',
                  backgroundColor: '#f1f5f9',
                },
              }}
            >
              Configurar
            </Button>
          </Paper>

          {/* Payment Methods Card */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows[6],
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CreditCard color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Formas de pagamento
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
              Gerencie suas formas de pagamento para facilitar o pagamento de suas próximas compras.
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: '#e2e8f0',
                color: '#0f172a',
                '&:hover': {
                  borderColor: '#cbd5e1',
                  backgroundColor: '#f1f5f9',
                },
              }}
            >
              Gerenciar
            </Button>
          </Paper>

          {/* Change Password Card */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows[6],
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Lock color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Alterar senha
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
              Altere sua senha de forma segura e independente.
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: '#e2e8f0',
                color: '#0f172a',
                '&:hover': {
                  borderColor: '#cbd5e1',
                  backgroundColor: '#f1f5f9',
                },
              }}
              component={Link}
              to="/MudarSenha"  // Adicionando o link para "Mudar Senha"
            >
              Alterar
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
