import { Grid, Card, CardMedia, CardContent, Typography, Box, Slide, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState, useEffect } from 'react';
import PageSection from '../components/PageSection';
import SectionHeader from '../components/SectionHeader';
import { colors, glassCardSx, cardHoverSx } from '../constants';
import { skillsData } from '../data/skills';

const pageSize = 6;

const Skills = () => {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalPages = Math.ceil(skillsData.length / pageSize);

  useEffect(() => {
    if (paused) return undefined;

    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages, paused]);

  const goToPage = (nextPage) => {
    setPage((nextPage + totalPages) % totalPages);
  };

  return (
    <PageSection>
      <SectionHeader
        className="animate-fade-in-up"
        eyebrow="Stack"
        title="Minhas Skills"
        subtitle="Tecnologias e competências que aplico no dia a dia em projetos reais."
      />

      <Box onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <Slide key={page} direction="left" in mountOnEnter unmountOnExit>
          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} justifyContent="center">
            {skillsData.slice(page * pageSize, page * pageSize + pageSize).map((skill) => (
              <Grid item xs={12} sm={6} lg={4} key={skill.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    ...glassCardSx,
                    ...cardHoverSx,
                    '@media (hover: none)': {
                      '&:hover': { transform: 'none' },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={skill.logo}
                    alt={skill.name}
                    sx={{ height: { xs: 96, sm: 110, md: 120 }, objectFit: 'contain', p: 2 }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 2.5 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {skill.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Slide>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1.5, md: 2 },
            mt: { xs: 3, md: 4 },
          }}
        >
          <IconButton
            aria-label="Página anterior"
            onClick={() => goToPage(page - 1)}
            sx={{
              color: 'text.primary',
              border: `1px solid ${colors.border}`,
              '&:hover': { bgcolor: colors.glassHover },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 200 }}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                component="button"
                type="button"
                aria-label={`Ir para página ${index + 1}`}
                aria-current={index === page ? 'true' : undefined}
                onClick={() => setPage(index)}
                sx={{
                  width: index === page ? 24 : 10,
                  height: 10,
                  borderRadius: 999,
                  border: 'none',
                  p: 0,
                  cursor: 'pointer',
                  bgcolor: index === page ? colors.accent : 'rgba(248, 250, 252, 0.25)',
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </Box>
          <IconButton
            aria-label="Próxima página"
            onClick={() => goToPage(page + 1)}
            sx={{
              color: 'text.primary',
              border: `1px solid ${colors.border}`,
              '&:hover': { bgcolor: colors.glassHover },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </PageSection>
  );
};

export default Skills;
