import { Grid, Typography, Button, Avatar, Box, Stack, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import PageSection from '../components/PageSection';
import { colors } from '../constants';
import { homeTechStack } from '../data/skills';

const Home = () => {
  return (
    <PageSection centered>
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
          <Box className="animate-fade-in-up">
            <Chip
              label="Disponível para novos projetos"
              size="small"
              sx={{
                mb: 2,
                bgcolor: 'rgba(99, 102, 241, 0.15)',
                color: colors.primaryLight,
                border: `1px solid rgba(99, 102, 241, 0.35)`,
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
                fontWeight: 800,
                mb: 1.5,
                color: 'text.primary',
              }}
            >
              Olá, sou Wesley
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 600, mb: 2 }}
            >
              Desenvolvedor Full Stack Pleno
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', maxWidth: 560, mb: 3, lineHeight: 1.8 }}
            >
              Especializado em Java, Spring Boot e APIs REST. Atuo desde o levantamento de requisitos
              até deploy em AWS, com foco em qualidade, performance e liderança técnica.
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
              {homeTechStack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    bgcolor: colors.glass,
                    color: 'text.primary',
                    border: `1px solid ${colors.border}`,
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Stack
            className="animate-fade-in-up-delay-2"
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{
              maxWidth: { sm: 520 },
              '& .MuiButton-root': {
                '@media (max-width:600px)': { width: '100%' },
              },
            }}
          >
            <Button variant="contained" color="primary" size="large" component={Link} to="/projetos">
              Ver Projetos
            </Button>
            <Button variant="outlined" color="inherit" size="large" component={Link} to="/sobre">
              Sobre Mim
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
          <Box
            className="animate-fade-in-up-delay-1"
            sx={{
              position: 'relative',
              width: 'fit-content',
              mx: { xs: 'auto', md: 'auto' },
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                inset: { xs: -16, md: -24 },
                borderRadius: '50%',
                background: `conic-gradient(from 180deg, ${colors.primary}, ${colors.accent}, ${colors.primaryLight}, ${colors.primary})`,
                opacity: 0.55,
                filter: 'blur(24px)',
                animation: 'pulseGlow 6s ease-in-out infinite',
              }}
            />
            <Avatar
              src="/profile.png"
              alt="Wesley da Silva Santos"
              className="animate-float"
              sx={{
                position: 'relative',
                width: { xs: 200, sm: 240, md: 280 },
                height: { xs: 200, sm: 240, md: 280 },
                mx: 'auto',
                border: `3px solid ${colors.border}`,
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
              }}
              imgProps={{ style: { objectFit: 'cover', objectPosition: 'top' } }}
            />
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};

export default Home;
