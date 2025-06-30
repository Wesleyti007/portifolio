import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, Slide } from '@mui/material';
import { useState, useEffect } from 'react';

const skillsData = [
  { id: 'git', name: 'Git', description: 'Controle de versão e fluxo Git Flow.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { id: 'problemas', name: 'Resolução de problemas', description: 'Diagnóstico e solução rápida de incidentes.', logo: 'https://cdn-icons-png.flaticon.com/512/3889/3889779.png' },
  { id: 'api_rest', name: 'APIs REST', description: 'Design e consumo de APIs RESTful.', logo: 'https://cdn-icons-png.flaticon.com/512/103/103093.png' },
  { id: 'soap', name: 'SOAP / SoapUI', description: 'Integrações e serviços SOAP/XML.', logo: 'https://static1.smartbear.co/smartbearbrand/media/images/home/soapui-icon.svg' },
  { id: 'spring', name: 'Spring Boot', description: 'Microsserviços, segurança e integrações.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { id: 'flutter', name: 'Flutter', description: 'Apps mobile multiplataforma.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { id: 'postgres', name: 'PostgreSQL', description: 'Banco de dados relacional avançado.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { id: 'mysql', name: 'MySQL', description: 'Banco de dados relacional popular.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { id: 'sqlserver', name: 'SQL Server', description: 'Banco de dados Microsoft SQL Server.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { id: 'kanban', name: 'Kanban', description: 'Metodologia ágil para fluxo de trabalho contínuo.', logo: 'https://cdn-icons-png.flaticon.com/512/8746/8746714.png' },
  { id: 'java', name: 'Java', description: 'Backend escalável com Java.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { id: 'javascript', name: 'JavaScript', description: 'Full-stack com JS moderno.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: 'jquery', name: 'jQuery', description: 'Manipulação de DOM em projetos legados.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
  { id: 'jasper', name: 'Jasper Reports', description: 'Geração de relatórios corporativos.', logo: 'https://media.invisioncic.com/i328763/set_resources_3/6d538d11ecfced46f459ee300b5e80ec_logo-white.svg' },
  { id: 'node', name: 'Node.js', description: 'APIs rápidas em JavaScript.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { id: 'openai', name: 'API da OpenAI', description: 'Integração com modelos de IA generativa.', logo: 'https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png' },
  { id: 'tableau', name: 'Tableau', description: 'Dashboards e visualização de dados interativos.', logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
  { id: 'react', name: 'React', description: 'Interfaces ricas e responsivas com hooks e MUI.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

const Skills = () => {
  const pageSize = 6;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(skillsData.length / pageSize);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage(prev => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg,#7158e2 0%,#4e9df1 100%)', display: 'flex', alignItems: 'center', color: 'common.white' }}>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Minhas Skills
        </Typography>
        <Slide key={page} direction="left" in mountOnEnter unmountOnExit>
          <Grid container spacing={4} justifyContent="center">
            {skillsData.slice(page * pageSize, page * pageSize + pageSize).map(skill => (
              <Grid item xs={12} sm={6} md={4} key={skill.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', borderRadius: 3, color: 'common.white', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
                  <CardMedia component="img" image={skill.logo} alt={skill.name} sx={{ height: 120, objectFit: 'contain', p: 2 }} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>{skill.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>{skill.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Slide>
      </Container>
    </Box>
  );
};

export default Skills;
