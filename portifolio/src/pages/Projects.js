import { Grid, Card, CardMedia, CardContent, Typography, Chip, Stack } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PageSection from '../components/PageSection';
import SectionHeader from '../components/SectionHeader';
import { colors, glassCardSx, cardHoverSx } from '../constants';

const projects = [
  {
    id: 'pizzas-ralfs',
    title: "Pizza Ralf's",
    description:
      'Plataforma completa em produção que centraliza toda a operação da pizzaria — do pedido pelo celular ao fechamento de caixa. Inclui cardápio digital com QR Code, delivery, impressão térmica, painéis admin e garçom, caixa por turno e relatórios gerenciais.',
    image: '/pizzas-ralfs.png',
    demo: 'https://pizzaralfs.com.br',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'paxpro',
    title: 'Paxpro SaaS',
    description:
      'Plataforma SaaS onde implementei módulo de IA generativa, automação de relatórios e otimizações de performance. Atuo na sustentação do sistema e na entrega contínua de novas funcionalidades.',
    image: '/paxpro.png',
    demo: 'https://paxpro.com.br',
    tags: ['Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Flutter'],
  },
  {
    id: 'bom-agendador',
    title: 'Bom Agendador',
    description:
      'SaaS de agendamentos que co-fundei; lançado em 2019 e vendido em maio/2020.',
    image: '/bomagendador.png',
    demo: 'https://www.bomagendador.com.br/',
    tags: ['SaaS', 'Empreendedorismo'],
  },
];

const animationClasses = [
  'animate-fade-in-up-delay-1',
  'animate-fade-in-up-delay-2',
  'animate-fade-in-up-delay-3',
];

const ProjectCard = ({ project, className }) => {
  const cardSx = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    ...glassCardSx,
    ...cardHoverSx,
    textDecoration: 'none',
    color: 'inherit',
    cursor: project.demo ? 'pointer' : 'default',
    '@media (hover: none)': {
      '&:hover': { transform: 'none' },
    },
  };

  const content = (
    <>
      <CardMedia
        component="img"
        sx={{
          height: { xs: 160, sm: 200 },
          objectFit: 'contain',
          p: { xs: 2.5, sm: 3 },
          background: colors.projectImageBg,
          borderBottom: `1px solid ${colors.projectImageBorder}`,
        }}
        image={project.image}
        alt={project.title}
      />
      <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 }, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {project.title}
          </Typography>
          {project.demo && (
            <OpenInNewIcon sx={{ fontSize: 18, color: 'text.secondary', opacity: 0.7, flexShrink: 0 }} />
          )}
        </Stack>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            lineHeight: 1.7,
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: 'rgba(99, 102, 241, 0.15)',
                color: colors.primaryLight,
                border: `1px solid rgba(99, 102, 241, 0.3)`,
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </>
  );

  if (project.demo) {
    return (
      <Card
        component="a"
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        sx={cardSx}
      >
        {content}
      </Card>
    );
  }

  return (
    <Card className={className} sx={cardSx}>
      {content}
    </Card>
  );
};

const Projects = () => {
  return (
    <PageSection>
      <SectionHeader
        className="animate-fade-in-up"
        eyebrow="Portfólio"
        title="Projetos em Destaque"
        subtitle="Projetos reais nos quais atuei com impacto em produção, performance e entrega contínua."
      />

      <Grid container spacing={{ xs: 2.5, md: 4 }} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={project.id} xs={12} sm={6} lg={4}>
            <ProjectCard project={project} className={animationClasses[index]} />
          </Grid>
        ))}
      </Grid>
    </PageSection>
  );
};

export default Projects;
