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

// Importe a logo da Cristal Blue.
// Ajuste o caminho caso o arquivo esteja em outra pasta.
import CristalBlueLogo from '../assets/cristalblue.jpeg';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  const handleLogin = () => {
    if (!isRobotChecked) {
      alert('Por favor, confirme que você não é um robô.');
      return;
    }
    console.log('Tentando logar com', { email, password });
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Metade Superior (Azul) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: '#0b1354',
        }}
      />

      {/* Metade Inferior (Branca) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: '#fff',
        }}
      />

      {/* Card de Login CENTRALIZADO na tela */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '350px', textAlign: 'center' }}>
          {/* Logo no topo do card */}
          <Box
            component="img"
            src={CristalBlueLogo}
            alt="Cristal Blue Logo"
            sx={{
              width: 100,
              display: 'block',
              margin: '0 auto',
              mb: 2,
            }}
          />

          <Typography variant="h5" sx={{ mb: 2 }}>
            Faça seu login no Cristal Blue
          </Typography>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => console.log('Login com Google')}
          >
            Entrar com Google
          </Button>

          <Divider sx={{ mb: 2 }}>ou</Divider>

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

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
                  <IconButton onClick={handleToggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={isRobotChecked}
                onChange={(e) => setIsRobotChecked(e.target.checked)}
              />
            }
            label="Não sou um robô"
            sx={{ mb: 2, textAlign: 'left' }}
          />

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
