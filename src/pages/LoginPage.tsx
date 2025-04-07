import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  // Função chamada ao clicar no botão "Entrar"
  const handleLogin = () => {
    if (!isRobotChecked) {
      alert('Por favor, confirme que você não é um robô.');
      return;
    }

    // Aqui você chamaria seu serviço (ex: axios) para fazer o login no backend.
    // Por exemplo: api.post('/login', { email, password })...
    console.log('Tentando logar com', { email, password });
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#0b1354', // azul escuro, semelhante ao Buson
      }}
    >
      {/* Cabeçalho fake (faixa azul) - se quiser algo mais elaborado, use AppBar */}
      <Box sx={{ flex: '0 0 200px' }} />

      {/* Container de login */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#fff',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '350px', textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Faça seu login no Cristal Blue
          </Typography>

          {/* Botão "Entrar com Google" - apenas layout */}
          <Button
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => console.log('Login com Google')}
          >
            Entrar com Google
          </Button>

          <Divider sx={{ mb: 2 }}>ou</Divider>

          {/* Campo de Email */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Campo de Senha (com botão para mostrar/ocultar) */}
          <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="password">Senha</InputLabel>
            <OutlinedInput
              id="password"
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleToggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {/* Checkbox "Não sou um robô" (simulando reCAPTCHA) */}
          <FormControlLabel
            control={
              <Checkbox
                checked={isRobotChecked}
                onChange={(e) => setIsRobotChecked(e.target.checked)}
              />
            }
            label="Não sou um robô"
            sx={{ mb: 2, display: 'block', textAlign: 'left' }}
          />

          {/* Botão Entrar */}
          <Button
            variant="contained"
            color="warning"
            fullWidth
            onClick={handleLogin}
          >
            Entrar
          </Button>

          <Typography
            variant="body2"
            sx={{ mt: 2, cursor: 'pointer', color: 'primary.main' }}
            onClick={() => console.log('Esqueci senha')}
          >
            Esqueceu a senha?
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            Você ainda não tem uma conta?{' '}
            <span
              style={{ color: '#1976d2', cursor: 'pointer' }}
              onClick={() => console.log('Cadastrar')}
            >
              Cadastre-se
            </span>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default LoginPage;
