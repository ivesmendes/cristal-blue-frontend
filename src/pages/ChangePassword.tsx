import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Button,
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        pt: '80px', // To account for fixed header
        minHeight: '100vh',
        backgroundColor: '#f8fafc', // Fundo simples
      }}
    >
      <Header />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        {/* Change Password Header */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: '12px',
            background: 'linear-gradient(to bottom,rgb(60, 60, 61) 0%,rgb(8, 8, 8) 100%)', // Gradiente azul no container
            color: 'white',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Alterar Senha
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: '#e0e0e0' }}>
            Para sua segurança, evite sequências de letras ou números e não compartilhe sua senha com terceiros! Nós da Cristal Blue nunca pediremos sua senha.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: '#f1f1f1' }}>
            A nova senha deve conter:
            <ul>
              <li>no mínimo 8 dígitos;</li>
              <li>pelo menos uma letra minúscula;</li>
              <li>pelo menos uma letra maiúscula;</li>
              <li>pelo menos um símbolo (exemplos: @#$%&!);</li>
              <li>pelo menos um número.</li>
            </ul>
          </Typography>

          <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="currentPassword" sx={{ color: 'white' }}>Senha atual</InputLabel>
            <OutlinedInput
              id="currentPassword"
              label="Senha atual"
              type={showPassword ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleToggleShowPassword}
                    edge="end"
                    sx={{ color: 'white' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                color: 'white',
                borderColor: '#90caf9',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9', // Border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2196f3', // Hover border color
                },
              }}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="newPassword" sx={{ color: 'white' }}>Nova Senha</InputLabel>
            <OutlinedInput
              id="newPassword"
              label="Nova Senha"
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleToggleShowPassword}
                    edge="end"
                    sx={{ color: 'white' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                color: 'white',
                borderColor: '#90caf9',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9', // Border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2196f3', // Hover border color
                },
              }}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="confirmPassword" sx={{ color: 'white' }}>Confirmar senha</InputLabel>
            <OutlinedInput
              id="confirmPassword"
              label="Confirmar senha"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleToggleShowPassword}
                    edge="end"
                    sx={{ color: 'white' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                color: 'white',
                borderColor: '#90caf9',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9', // Border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2196f3', // Hover border color
                },
              }}
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: 'bold',
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Alterar senha
          </Button>

          {/* Link to Profile */}
          <Link to="/perfil" style={{ display: 'block', marginTop: '20px', textAlign: 'center', color: '#2196f3', textDecoration: 'none' }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
              Voltar para o perfil
            </Typography>
          </Link>
        </Paper>
      </Container>
    </Box>
  );
};

export default ChangePasswordPage;
