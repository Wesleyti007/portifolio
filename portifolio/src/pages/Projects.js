import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const data = [
  {
    id: 'paxpro',
    title: 'Paxpro SaaS',
    description: 'Plataforma SaaS onde implementei módulo de IA generativa, automação de relatórios e otimizações de performance. Atuo na sustentação do sistema e na entrega contínua de novas funcionalidades, com melhorias frontend e backend usando Node.js, PostgreSQL, Java 8, Spring Boot, JavaScript, JQuery e também desenvolvi app em Flutter.',
    image: '/paxpro.png',
    demo: 'https://paxpro.com.br',
    code: '',
  },
  {
    id: 1,
    title: 'Dashboard Financeiro',
    description: 'SPA para análise de despesas com gráficos interativos.',
    image: 'https://images.unsplash.com/photo-1581093588401-3dca56afa9b4?auto=format&fit=crop&w=600&q=80',
    repo: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'E-commerce React',
    description: 'Loja virtual completa com carrinho e checkout.',
    image: 'https://images.unsplash.com/photo-1585386959984-a415522de494?auto=format&fit=crop&w=600&q=80',
    repo: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Aplicativo de Tarefas',
    description: 'To-do list com drag-and-drop e sincronização em tempo real.',
    image: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=600&q=80',
    repo: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Bom Agendador',
    description: 'SaaS de agendamentos que co-fundei; lançado em 2019 e vendido em maio/2020.',
    image: '/bomagendador.png',
    repo: 'https://github.com/Wesleyti007',
    demo: 'https://www.bomagendador.com.br/',
  },
];

const Projects = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #7158e2 0%, #4e9df1 100%)', display: 'flex', alignItems: 'center', color: 'common.white' }}>
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Projetos em Destaque
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {data.filter(p => ['Paxpro SaaS', 'Bom Agendador'].includes(p.title)).map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card component="a" href={project.demo} target="_blank" sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', borderRadius: 3, color: 'common.white', textDecoration: 'none', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
              <CardMedia
                    component="img"
                    sx={{ height: 180, objectFit: 'contain', p: 2 }}
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
