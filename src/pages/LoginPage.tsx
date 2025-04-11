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
import GoogleIcon from '@mui/icons-material/Google';

// Importe sua logo (ajuste o caminho conforme necessário)
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom,rgb(28, 85, 170) 0%,rgb(10, 31, 90) 100%)', // Gradiente do azul claro para o escuro
        overflow: 'hidden',
        margin: -1,
        padding: 0
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'none', // Removido o background da imagem do ônibus
          filter: 'blur(10px)', // Efeito de blur
          zIndex: -1,
        }}
      ></Box>

      <Paper elevation={3} sx={{ 
        p: 3, 
        width: '100%', 
        maxWidth: '400px',
        textAlign: 'center',
        borderRadius: '12px',
        margin: '16px', // Adiciona margem interna para evitar tocar nas bordas
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo branco com leve transparência
      }}>
        {/* Logo da Cristal Blue */}
        <Box 
          component="img"
          src={CristalBlueLogo}
          alt="Cristal Blue Logo"
          sx={{
            height: '80px', // Ajuste conforme necessário
            mb: 1,
            objectFit: 'contain'
          }}
        />

        <Typography variant="h5" component="h1" sx={{ 
          mb: 3,
          fontWeight: 'bold',
          color: '#0b1354'
        }}>
          Faça seu login no Cristal Blue
        </Typography>

        <Button
          variant="outlined"
          fullWidth
          sx={{ 
            mb: 3,
            py: 1.5,
            textTransform: 'none',
            fontSize: '1rem',
            borderColor: '#ddd',
            '&:hover': { borderColor: '#bbb' }
          }}
          startIcon={<GoogleIcon />}
          onClick={() => console.log('Login com Google')}
        >
          ENTRAR COM GOOGLE
        </Button>

        <Divider sx={{ 
          mb: 3, 
          color: 'text.secondary',
          '&::before, &::after': {
            borderColor: '#ddd'
          }
        }}>
          OU
        </Divider>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
        />

        <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="password" size="small">Senha</InputLabel>
          <OutlinedInput
            id="password"
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <IconButton 
                  onClick={handleToggleShowPassword} 
                  edge="end"
                  size="small"
                >
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
              size="small"
              sx={{ color: '#0b1354' }}
            />
          }
          label="Não sou um robô"
          sx={{ 
            mb: 2, 
            alignSelf: 'flex-start',
            '& .MuiTypography-root': { 
              fontSize: '0.875rem',
              color: '#555'
            }
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ 
            mb: 2,
            py: 1.5,
            backgroundColor: '#0b1354',
            '&:hover': { backgroundColor: '#1a237e' },
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
          onClick={handleLogin}
        >
          ENTRAR
        </Button>

        <Typography
          variant="body2"
          sx={{ 
            mt: 1, 
            cursor: 'pointer', 
            color: '#0b1354',
            textDecoration: 'underline',
            fontSize: '0.875rem',
            '&:hover': { color: '#1a237e' }
          }}
          onClick={() => console.log('Esqueci senha')}
        >
          Esqueceu a senha?
        </Typography>

        <Typography variant="body2" sx={{ 
          mt: 2, 
          fontSize: '0.875rem',
          color: '#555'
        }}>
          Você ainda não tem uma conta?{' '}
          <Box
            component="span"
            sx={{ 
              color: '#0b1354', 
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': { color: '#1a237e' }
            }}
            onClick={() => console.log('Cadastrar')}
          >
            Cadastre-se
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
}

export default LoginPage;
