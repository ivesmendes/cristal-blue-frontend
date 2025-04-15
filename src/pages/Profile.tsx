import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Chip,
  Grid,
  Checkbox,
} from '@mui/material';
import { Edit, Lock, CreditCard, Star, Visibility, VisibilityOff, Delete, Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Estados para as funcionalidades dinâmicas
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Estados para gerenciamento de cartões
  const [cards, setCards] = useState([
    {
      id: 1,
      cardNumber: '•••• •••• •••• 4242',
      cardName: 'Guilherme Costa',
      expiryDate: '12/25',
      cardType: 'visa',
      isDefault: true
    },
    {
      id: 2,
      cardNumber: '•••• •••• •••• 5555',
      cardName: 'Guilherme Costa',
      expiryDate: '06/24',
      cardType: 'mastercard',
      isDefault: false
    }
  ]);
  
  // Estados para o formulário de adicionar cartão
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    cardType: 'visa',
    isDefault: false
  });

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSavePassword = () => {
    if (newPassword !== confirmPassword) {
      alert('As senhas não correspondem!');
      return;
    }
    alert('Senha alterada com sucesso!');
    setActiveForm(null);
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      const formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setNewCard({...newCard, [name]: formattedValue});
      return;
    }
    
    if (name === 'expiryDate') {
      const formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2').substr(0, 5);
      setNewCard({...newCard, [name]: formattedValue});
      return;
    }
    
    setNewCard({...newCard, [name]: value});
  };

  const handleAddCard = () => {
    if (!newCard.cardNumber || !newCard.cardName || !newCard.expiryDate || !newCard.cvv) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    
    const isFirstCard = cards.length === 0;
    const willBeDefault = isFirstCard || newCard.isDefault;
    
    const updatedCards = willBeDefault 
      ? cards.map(card => ({...card, isDefault: false}))
      : [...cards];
    
    const addedCard = {
      id: Date.now(),
      cardNumber: `•••• •••• •••• ${newCard.cardNumber.slice(-4)}`,
      cardName: newCard.cardName,
      expiryDate: newCard.expiryDate,
      cardType: newCard.cardType,
      isDefault: willBeDefault
    };
    
    setCards([...updatedCards, addedCard]);
    setNewCard({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      cardType: 'visa',
      isDefault: false
    });
    setActiveForm(null);
    alert('Cartão adicionado com sucesso!');
  };

  const handleSetDefaultCard = (cardId: number) => {
    setCards(cards.map(card => ({
      ...card,
      isDefault: card.id === cardId
    })));
  };

  const handleDeleteCard = (cardId: number) => {
    const cardToDelete = cards.find(card => card.id === cardId);
    if (cardToDelete?.isDefault && cards.length > 1) {
      alert('Você não pode remover seu cartão principal. Defina outro cartão como principal primeiro.');
      return;
    }
    
    setCards(cards.filter(card => card.id !== cardId));
  };

  return (
    <Box sx={{ pt: '80px', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Profile Header */}
        <Paper elevation={3} sx={{
          p: 4,
          mb: 4,
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
          color: 'white',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar sx={{ width: 80, height: 80, mr: 3, bgcolor: '#3b82f6', fontSize: '2rem' }}>
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

        {/* Minhas passagens */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#0f172a' }}>
          Minhas passagens
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#64748b' }}>
          Aqui você pode visualizar suas últimas passagens compradas.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 3 }}>
          {/* Formas de pagamento */}
          <Paper elevation={2} sx={{
            p: 3,
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: theme.shadows[6],
            },
          }}>
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
              onClick={() => setActiveForm('payment')}
            >
              Gerenciar Cartões
            </Button>
          </Paper>

          {/* Alterar Senha */}
          <Paper elevation={2} sx={{
            p: 3,
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: theme.shadows[6],
            },
          }}>
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
              onClick={() => setActiveForm('password')}
            >
              Alterar
            </Button>
          </Paper>
        </Box>

        {/* Formulário de Alterar Senha Dinâmico */}
        {activeForm === 'password' && (
          <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: '12px' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Alterar Senha
            </Typography>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="currentPassword">Senha Atual</InputLabel>
              <OutlinedInput
                id="currentPassword"
                type={showPassword ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                label="Senha Atual"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="newPassword">Nova Senha</InputLabel>
              <OutlinedInput
                id="newPassword"
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                label="Nova Senha"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="confirmPassword">Confirmar Senha</InputLabel>
              <OutlinedInput
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                label="Confirmar Senha"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, py: 1.5, fontWeight: 'bold' }}
              onClick={handleSavePassword}
            >
              Salvar Senha
            </Button>
            <Button
              variant="text"
              sx={{ mt: 2, color: '#2196f3' }}
              onClick={() => setActiveForm(null)}
            >
              Cancelar
            </Button>
          </Paper>
        )}

        {/* Formulário de Gerenciamento de Cartões */}
        {activeForm === 'payment' && (
          <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: '12px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Meus Cartões
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => setActiveForm('addCard')}
              >
                Adicionar Cartão
              </Button>
            </Box>

            {cards.length === 0 ? (
              <Typography variant="body1" sx={{ color: '#64748b', textAlign: 'center', py: 4 }}>
                Você ainda não possui cartões cadastrados.
              </Typography>
            ) : (
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                {cards.map((card) => (
                  <Paper key={card.id} elevation={1} sx={{ p: 3, borderRadius: '8px', position: 'relative' }}>
                    {card.isDefault && (
                      <Chip 
                        label="Principal" 
                        color="primary" 
                        size="small" 
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                      />
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {card.cardType === 'visa' ? (
                        <img src="/visa-logo.png" alt="Visa" style={{ height: 24, marginRight: 8 }} />
                      ) : (
                        <img src="/mastercard-logo.png" alt="Mastercard" style={{ height: 24, marginRight: 8 }} />
                      )}
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {card.cardNumber}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      Titular: {card.cardName}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      Validade: {card.expiryDate}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {!card.isDefault && (
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleSetDefaultCard(card.id)}
                        >
                          Tornar principal
                        </Button>
                      )}
                      <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => handleDeleteCard(card.id)}
                      >
                        Remover
                      </Button>
                    </Box>
                  </Paper>
                ))}
              </Box>
            )}
            
            <Button
              variant="text"
              sx={{ mt: 2, color: '#2196f3' }}
              onClick={() => setActiveForm(null)}
            >
              Voltar
            </Button>
          </Paper>
        )}

        {/* Formulário de Adicionar Cartão */}
        {activeForm === 'addCard' && (
          <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: '12px' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Adicionar Cartão de Crédito
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel htmlFor="cardNumber">Número do Cartão</InputLabel>
              <OutlinedInput
                id="cardNumber"
                name="cardNumber"
                value={newCard.cardNumber}
                onChange={handleCardInputChange}
                label="Número do Cartão"
                placeholder="0000 0000 0000 0000"
                inputProps={{ maxLength: 19 }}
              />
            </FormControl>
            
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel htmlFor="cardName">Nome no Cartão</InputLabel>
              <OutlinedInput
                id="cardName"
                name="cardName"
                value={newCard.cardName}
                onChange={handleCardInputChange}
                label="Nome no Cartão"
              />
            </FormControl>
            
            <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
              <FormControl sx={{ width: '50%' }}>
                <InputLabel htmlFor="expiryDate">Validade (MM/AA)</InputLabel>
                <OutlinedInput
                  id="expiryDate"
                  name="expiryDate"
                  value={newCard.expiryDate}
                  onChange={handleCardInputChange}
                  label="Validade (MM/AA)"
                  placeholder="MM/AA"
                  inputProps={{ maxLength: 5 }}
                />
              </FormControl>
              <FormControl sx={{ width: '50%' }}>
                <InputLabel htmlFor="cvv">CVV</InputLabel>
                <OutlinedInput
                  id="cvv"
                  name="cvv"
                  value={newCard.cvv}
                  onChange={handleCardInputChange}
                  label="CVV"
                  type="password"
                  inputProps={{ maxLength: 4 }}
                />
              </FormControl>
            </Box>
            
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Bandeira do Cartão
              </Typography>
              <RadioGroup
                row
                aria-label="cardType"
                name="cardType"
                value={newCard.cardType}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  setNewCard({...newCard, cardType: e.target.value})
                }
              >
                <FormControlLabel value="visa" control={<Radio />} label="Visa" />
                <FormControlLabel value="mastercard" control={<Radio />} label="Mastercard" />
                <FormControlLabel value="amex" control={<Radio />} label="American Express" />
                <FormControlLabel value="other" control={<Radio />} label="Outro" />
              </RadioGroup>
            </FormControl>
            
            <FormControlLabel
              control={
                <Checkbox
                  checked={newCard.isDefault}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setNewCard({...newCard, isDefault: e.target.checked})
                  }
                  name="isDefault"
                  color="primary"
                />
              }
              label="Definir como meu cartão principal"
              sx={{ mb: 3 }}
            />
            
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ py: 1.5, fontWeight: 'bold', mb: 2 }}
              onClick={handleAddCard}
            >
              Adicionar Cartão
            </Button>
            
            <Button
              variant="text"
              fullWidth
              sx={{ color: '#2196f3' }}
              onClick={() => setActiveForm('payment')}
            >
              Cancelar
            </Button>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Profile;