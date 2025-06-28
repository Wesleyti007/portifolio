import { Container, Typography, Box, Grid, Paper, Link, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #7158e2 0%, #4e9df1 100%)', display: 'flex', alignItems: 'center', color: 'common.white' }}>
      <Container sx={{ py: 8, maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom>
          Entre em Contato
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 4, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', textAlign: 'center', borderRadius: 3 }}>
              <IconButton href="mailto:Wesley.ti07@gmail.com" sx={{ color: '#fff', mb: 1 }}>
                <EmailIcon fontSize="large" />
              </IconButton>
              <Typography variant="h6" gutterBottom>E-mail</Typography>
              <Link href="mailto:Wesley.ti07@gmail.com" underline="hover" color="inherit">
                Enviar e-mail
              </Link>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 4, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', textAlign: 'center', borderRadius: 3 }}>
              <IconButton href="https://www.linkedin.com/in/wesley-santos-515b73152/" target="_blank" rel="noopener" sx={{ color: '#0A66C2', mb: 1 }}>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <Typography variant="h6" gutterBottom>LinkedIn</Typography>
              <Link href="https://www.linkedin.com/in/wesley-santos-515b73152/" target="_blank" underline="hover" color="inherit">
                Ver perfil
              </Link>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 4, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', textAlign: 'center', borderRadius: 3 }}>
              <IconButton href="tel:+5511957620875" sx={{ color: '#fff', mb: 1 }}>
                <PhoneIcon fontSize="large" />
              </IconButton>
              <IconButton href="https://wa.me/5511957620875" target="_blank" sx={{ color: '#25D366', ml: 1, mb: 1 }}>
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              <Typography variant="h6" gutterBottom>Telefone / WhatsApp</Typography>
              <Typography variant="body1" gutterBottom>(11) 95762-0875</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" color="inherit" sx={{ opacity: 0.9, mt: 4 }}>
              Endereço: Rua German Lorca, 1000, Apto 87A, São Paulo – SP, 05584-150
              <br />E-mail: <a href="mailto:Wesley.ti07@gmail.com">Wesley.ti07@gmail.com</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
