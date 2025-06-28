import { Container, Typography, Box, Grid, Card, CardContent, Divider } from '@mui/material';

const experience = [
  { period: 'Jan 2022 – Atual', title: 'Desenvolvedor Full Stack Java Jr (PJ)', company: 'COINFO LTDA', location: 'São Paulo – SP' },
  { period: 'Fev 2021 – Dez 2021', title: 'Trainee TI (PJ)', company: 'COINFO LTDA', location: 'São Paulo – SP' },
  { period: 'Jan 2020 – Jan 2021', title: 'Estagiário (Progress)', company: 'COINFO LTDA', location: 'São Paulo – SP' },
  { period: 'Mar 2014 – Fev 2020', title: 'Soldado', company: '2º Batalhão de Polícia do Exército', location: 'São Paulo – SP' },
];

const education = [
  { period: '2017 – 2020', course: 'Bacharelado em Sistemas de Informação', institution: 'Centro Universitário das Américas', location: 'São Paulo – SP' },
];

const courses = [
  'Formação IA & Java – Alura (2025)',
  'GPT e Java – Alura (2024)',
  'AWS Cloud Practitioner – Alura (2023)',
  'Banco de Dados Expert – Udemy (2020)',
  'Java do Zero ao Profissional – Udemy (2020)',
];

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #7158e2 0%, #4e9df1 100%)', color: 'common.white', display: 'flex', alignItems: 'center' }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card sx={{ p: { xs: 3, md: 6 }, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Sobre Mim</Typography>
                <Typography variant="body2" sx={{ color: 'common.white', textAlign: 'justify' }}>
                  Sou desenvolvedor de software com experiência em criar soluções robustas e eficientes para backend e frontend. Tenho conhecimento sólido em Java e Spring Boot, além de familiaridade com JavaScript e Flutter.
                  <br /><br />
                  Com experiência em APIs REST e SOAP, PostgreSQL e SQL, desenvolvo aplicações escaláveis e de alto desempenho. Atuo no levantamento de requisitos, análise de negócios e resolução de problemas complexos.
                  <br /><br />
                  Tenho vivência com Git, JQuery, Node.js e Jasper Reports. Recentemente explorei integrações com a API da OpenAI, mostrando minha busca constante por inovação.
                </Typography>

                <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.3)' }} />

                <Typography variant="h6" sx={{ color: '#4e9df1', fontWeight: 600 }} gutterBottom>
                  Experiência Profissional
                </Typography>
                {experience.map((item, idx) => (
                  <Box key={idx} sx={{ mb: 2 }}>
                    <Typography sx={{ color: '#4e9df1', fontWeight: 600 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'common.white' }}>
                      {item.company} — {item.location} <br /> {item.period}
                    </Typography>
                  </Box>
                ))}

                <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.3)' }} />

                <Typography variant="h6" sx={{ color: '#4e9df1', fontWeight: 600 }} gutterBottom>
                  Formação Acadêmica
                </Typography>
                {education.map((item, idx) => (
                  <Box key={idx} sx={{ mb: 2 }}>
                    <Typography sx={{ color: '#4e9df1', fontWeight: 600 }}>{item.course}</Typography>
                    <Typography variant="body2" sx={{ color: 'common.white' }}>
                      {item.institution} — {item.location} <br /> {item.period}
                    </Typography>
                  </Box>
                ))}

                <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.3)' }} />

                <Typography variant="h6" sx={{ color: '#4e9df1', fontWeight: 600 }} gutterBottom>
                  Cursos & Certificações
                </Typography>
                <Box component="ul" sx={{ pl: 0, listStyle: 'none', color: 'common.white', mb: 0 }}>
                  {courses.map(course => (
                    <Box key={course} component="li" sx={{ mb: 1 }}>{course}</Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
