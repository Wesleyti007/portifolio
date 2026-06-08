import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import PageSection from '../components/PageSection';
import SectionHeader from '../components/SectionHeader';
import CareerTimeline from '../components/CareerTimeline';
import { glassCardSx } from '../constants';

const education = [
  {
    period: '2017 – 2020',
    course: 'Bacharelado em Sistemas de Informação',
    institution: 'Centro Universitário das Américas',
    location: 'São Paulo – SP',
  },
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
    <PageSection centered={false}>
      <SectionHeader
        className="animate-fade-in-up"
        eyebrow="Perfil"
        title="Sobre Mim"
        subtitle="Desenvolvedor pleno com trajetória que une disciplina, empreendedorismo e engenharia de software."
      />

      <Grid container spacing={{ xs: 3, md: 4 }}>
        <Grid item xs={12}>
          <Card className="animate-fade-in-up-delay-1" sx={{ p: { xs: 2.5, sm: 3, md: 4 }, ...glassCardSx }}>
            <CardContent sx={{ p: { xs: 0, sm: '0 !important' } }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Sou desenvolvedor de software pleno com experiência em criar soluções robustas e eficientes para backend e frontend. Tenho conhecimento sólido em Java e Spring Boot, além de familiaridade com JavaScript e Flutter.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
                Com experiência em APIs REST e SOAP, PostgreSQL e SQL, desenvolvo aplicações escaláveis e de alto desempenho. Atuo no levantamento de requisitos, análise de negócios e resolução de problemas complexos.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
                Tenho vivência com Git, JQuery, Node.js e Jasper Reports. Recentemente explorei integrações com a API da OpenAI, mostrando minha busca constante por inovação.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Box className="animate-fade-in-up-delay-2">
            <Typography variant="h5" color="secondary" sx={{ fontWeight: 700, mb: 1 }}>
              Trajetória Profissional
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, maxWidth: 720 }}>
              Da área militar ao empreendedorismo e, hoje, ao desenvolvimento de software em produção.
            </Typography>
            <CareerTimeline />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="animate-fade-in-up-delay-3" sx={{ p: { xs: 2.5, md: 3 }, height: '100%', ...glassCardSx }}>
            <CardContent sx={{ p: { xs: 0, sm: '0 !important' } }}>
              <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 2 }}>
                Formação Acadêmica
              </Typography>
              {education.map((item) => (
                <Box key={item.course}>
                  <Typography color="secondary" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {item.course}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.institution} — {item.location}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                    {item.period}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="animate-fade-in-up-delay-3" sx={{ p: { xs: 2.5, md: 3 }, height: '100%', ...glassCardSx }}>
            <CardContent sx={{ p: { xs: 0, sm: '0 !important' } }}>
              <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 2 }}>
                Cursos & Certificações
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5, color: 'text.secondary' }}>
                {courses.map((course) => (
                  <Typography key={course} component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.6 }}>
                    {course}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageSection>
  );
};

export default About;
