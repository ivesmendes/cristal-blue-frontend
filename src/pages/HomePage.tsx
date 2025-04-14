import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Stack,
  Card, 
  CardContent, 
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Search, 
  ArrowForward, 
  Place, 
  CalendarToday, 
  Event,
  Email,
  Phone,
  WhatsApp
} from '@mui/icons-material';
import Header from '../components/Header'; // Importe seu componente Header
import Footer from '../components/Footer'; // Importe o componente Footer

const HomePage = () => {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Header fixo no topo */}
      <Header />
      
      {/* Conteúdo principal com padding para não ficar atrás do header */}
      <Box component="main" sx={{ pt: 10 }}> {/* Ajuste pt conforme altura do header */}
        
        {/* Seção Hero */}
        <Box sx={{
          background: 'linear-gradient(to right, #0b1354, #1a237e)',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}>
          <Container maxWidth="md">
            <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
              COMPRE SUA PASSAGEM DE ÔNIBUS NA CRISTAL BLUE
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              ENCONTRE OFERTAS EXCLUSIVAS E VIAJE PELO BRASIL!
            </Typography>
            
            <Card sx={{ p: 3, borderRadius: 2, maxWidth: 800, mx: 'auto' }}>
              <Stack spacing={2}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    select
                    fullWidth
                    label="Origem"
                    defaultValue="Goiânia - GO"
                    SelectProps={{ native: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Place />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <option value="Goiânia - GO">Goiânia - GO</option>
                    <option value="Brasília - DF">Brasília - DF</option>
                  </TextField>
                  
                  <TextField
                    select
                    fullWidth
                    label="Destino"
                    defaultValue="Brasília - DF"
                    SelectProps={{ native: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Place />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <option value="Brasília - DF">Brasília - DF</option>
                    <option value="Goiânia - GO">Goiânia - GO</option>
                  </TextField>
                </Stack>
                
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Ida"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarToday />
                        </InputAdornment>
                      ),
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    type="date"
                    label="Volta"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Event />
                        </InputAdornment>
                      ),
                    }}
                  />
                  
                  <Button 
                    fullWidth 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      height: '56px', 
                      bgcolor: '#0b1354', 
                      '&:hover': { bgcolor: '#1a237e' } 
                    }}
                    startIcon={<Search />}
                  >
                    PROCURAR PASSAGENS
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </Container>
        </Box>

        {/* Seção de Download do App */}
        <Box sx={{ py: 6, bgcolor: '#f5f7fa' }}>
          <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#0b1354' }}>
                  Baixe o app Cristal Blue e ganhe descontos exclusivos!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  <Box component="span" sx={{ fontWeight: 'bold', display: 'block', mb: 1 }}>
                    Mais facilidade no dia da sua viagem!
                  </Box>
                  <Box component="span" sx={{ display: 'block', mb: 2 }}>
                    Mais economia em suas próximas compras pelo app!
                  </Box>
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" sx={{ bgcolor: '#0b1354' }}>Google Play</Button>
                  <Button variant="contained" sx={{ bgcolor: '#0b1354' }}>App Store</Button>
                </Stack>
              </Box>
              
              <Box sx={{ flex: 1, bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 1, textAlign: 'center' }}>
                <Box sx={{ 
                  width: '100%', 
                  height: 200,
                  bgcolor: '#eee',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  App Preview Image
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* Seção de Ofertas */}
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: '#0b1354' }}>
              Principais ofertas de passagens de ônibus
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
              Confira as ofertas exclusivas das passagens mais buscadas em nosso site.
            </Typography>
            
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="stretch">
              {[
                { from: 'Goiânia - GO', to: 'Brasília - DF', price: 'R$ 39,47' },
                { from: 'Brasília - DF', to: 'Goiânia - GO', price: 'R$ 36,67' },
                { from: 'Goiânia - GO', to: 'Palmas - TO', price: 'R$ 68,78', promo: 'MÊS OFF' },
              ].map((trip, index) => (
                <Box key={index} sx={{ flex: 1 }}>
                  <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#0b1354' }}>
                        {trip.to}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        Saindo de <Box component="span" sx={{ fontWeight: 'bold' }}>{trip.from}</Box>
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        Indo para <Box component="span" sx={{ fontWeight: 'bold' }}>{trip.to}</Box>
                      </Typography>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#0b1354' }}>
                        a partir de <Box component="span" sx={{ color: '#4caf50' }}>{trip.price}</Box>
                      </Typography>
                      {trip.promo && (
                        <Typography variant="body2" sx={{ 
                          mb: 2, 
                          bgcolor: '#ff5722', 
                          color: 'white', 
                          display: 'inline-block',
                          px: 1,
                          borderRadius: 1
                        }}>
                          {trip.promo}
                        </Typography>
                      )}
                      <Button 
                        variant="outlined" 
                        endIcon={<ArrowForward />}
                        sx={{ 
                          color: '#0b1354', 
                          borderColor: '#0b1354',
                          '&:hover': { borderColor: '#1a237e' }
                        }}
                      >
                        Conferir oferta
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Stack>
            
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button variant="text" endIcon={<ArrowForward />} sx={{ color: '#0b1354' }}>
                Ver todas as ofertas
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Seção do Blog */}
        <Box sx={{ py: 6, bgcolor: '#f5f7fa' }}>
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: '#0b1354' }}>
              Blog da Cristal Blue
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
              Confira as novidades e dicas e fique por dentro do mundo das viagens de ônibus e turismo.
            </Typography>
            
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
              {[
                { 
                  title: 'Feriados 2025: veja como conhecer o Brasil gastando menos', 
                  excerpt: 'Com um bom planejamento e criatividade, você pode viajar pelo Brasil, conhecer lugares incríveis e descansar sem gastar muito!'
                },
                { 
                  title: 'Viagem em família: garanta a diversão para todas as idades', 
                  excerpt: 'Viajar em família é uma oportunidade para criar laços, explorar novos lugares juntos e criar lembranças que durarão a vida toda.'
                },
                { 
                  title: 'Como trocar passagem de ônibus: saiba tudo sobre o assunto!', 
                  excerpt: 'Trocar uma passagem de ônibus pode parecer complicado, mas com as informações corretas, o processo pode ser bastante simples.'
                },
              ].map((post, index) => (
                <Box key={index} sx={{ flex: 1 }}>
                  <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 1 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#0b1354' }}>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 3 }}>
                        {post.excerpt}
                      </Typography>
                      <Button 
                        variant="text" 
                        endIcon={<ArrowForward />}
                        sx={{ color: '#0b1354' }}
                      >
                        Ler mais
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Stack>
            
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button variant="text" endIcon={<ArrowForward />} sx={{ color: '#0b1354' }}>
                Ver todas as postagens
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Seção de Newsletter */}
        <Box sx={{ py: 6 }}>
          <Container maxWidth="md">
            <Card sx={{ p: 4, borderRadius: 2, bgcolor: '#0b1354', color: 'white' }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
                Cadastre-se agora e receba ofertas exclusivas!
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
                Ganhe 10% de desconto em sua primeira compra e fique por dentro de novas ofertas de passagem de ônibus.
              </Typography>
              
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="Nome"
                  variant="outlined"
                  sx={{ bgcolor: 'white', borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  label="E-mail"
                  variant="outlined"
                  sx={{ bgcolor: 'white', borderRadius: 1 }}
                />
                <Button 
                  fullWidth 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    height: '56px', 
                    bgcolor: '#4caf50',
                    '&:hover': { bgcolor: '#388e3c' }
                  }}
                >
                  CADASTRAR
                </Button>
              </Stack>
            </Card>
          </Container>
        </Box>

       
      </Box>
      <Footer/>
    </Box>
  );
};

export default HomePage;