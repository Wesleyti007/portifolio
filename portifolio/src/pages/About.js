import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PageSection from '../components/PageSection';
import SectionHeader from '../components/SectionHeader';
import CareerTimeline from '../components/CareerTimeline';
import { glassCardSx, RESUME_URL, RESUME_FILENAME } from '../constants';

const education = [
  {
    period: '2017 – 2020',
    course: 'Bacharelado em Sistemas de Informação',
    institution: 'Centro Universitário das Américas',
    location: 'São Paulo – SP',
  },
];

const courses = [
  'Formação Inteligência Artificial e Java – Alura (2025)',
  'GPT e Java: integre uma aplicação com a OpenAI – Alura (2024)',
  'AWS Certified Cloud Practitioner: Domínios 1 e 2 – Alura (2023)',
  'PostgreSQL: Views, Subconsultas e Funções – Alura (2023)',
  'PostgreSQL – Alura (2023)',
  'Banco de Dados Expert: SQL e Administração – Udemy (2020)',
  'Java do Zero ao Profissional + Projetos – Udemy (2020)',
  'C# Completo – Programação Orientada a Objetos – Udemy',
];

const About = () => {
  return (
    <PageSection centered={false}>
      <SectionHeader
        className="animate-fade-in-up"
        eyebrow="Perfil"
        title="Sobre Mim"
        subtitle="Desenvolvedor Full Stack Java Pleno com trajetória que une disciplina, empreendedorismo e engenharia de software."
      />

      <Grid container spacing={{ xs: 3, md: 4 }}>
        <Grid item xs={12}>
          <Card className="animate-fade-in-up-delay-1" sx={{ p: { xs: 2.5, sm: 3, md: 4 }, ...glassCardSx }}>
            <CardContent sx={{ p: { xs: 0, sm: '0 !important' } }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Sou Desenvolvedor Full Stack Java Pleno, com sólida experiência em desenvolvimento, sustentação e evolução de sistemas corporativos. Atuo com Java (8 e 25), Spring Boot e PostgreSQL no backend, além de JavaScript, React e Flutter no frontend.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
                Participo de todo o ciclo de vida das aplicações, do levantamento de requisitos à implantação em produção na AWS, com forte atuação em análise de regras de negócio, integração entre sistemas via APIs REST e SOAP e correção de problemas complexos.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
                Atualmente lidero um projeto interno, participando de decisões técnicas e orientando desenvolvedores menos experientes. Uso IA no dia a dia (Claude e Cursor) e tenho experiência com integrações com a API da OpenAI.
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                href={RESUME_URL}
                download={RESUME_FILENAME}
                startIcon={<DownloadIcon />}
                sx={{ mt: 3, textTransform: 'none', fontWeight: 600 }}
              >
                Baixar currículo em PDF
              </Button>
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
