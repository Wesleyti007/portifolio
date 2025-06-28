import { Container, Grid, Typography, Button, Avatar, Box } from '@mui/material';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #7158e2 0%, #4e9df1 100%)',
      color: 'common.white',
    }}>
      <Container>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Olá, sou Wesley
          </Typography>
          <Typography variant="h6" color="inherit" sx={{ opacity: 0.9 }} paragraph>
            Desenvolvedor Full Stack
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/projetos"
            sx={{ mt: 2 }}
          >
            Ver Projetos
          </Button>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <Avatar
            src="/profile.png"
            alt="Wesley da Silva Santos"
            sx={{ width: 250, height: 250, mx: 'auto', boxShadow: 3, borderRadius: '50%' }}
            imgProps={{ style: { objectFit: 'cover', objectPosition: 'top' } }}
          />
        </Grid>
      </Grid>
    </Container>
    <Box component="img" src="/solucoes.png" alt="solucoes" sx={{ position: 'absolute', bottom: 16, right: 16, width: 120, opacity: 0.15 }} />
    </Box>
  );
};

export default Home;
