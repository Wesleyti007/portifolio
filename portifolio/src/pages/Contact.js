import { Typography, Grid, Paper, Link, IconButton, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PageSection from '../components/PageSection';
import SectionHeader from '../components/SectionHeader';
import { colors, glassPanelSx, cardHoverSx } from '../constants';

const contactItems = [
  {
    id: 'email',
    icon: EmailIcon,
    title: 'E-mail',
    href: 'mailto:Wesley.ti07@gmail.com',
    label: 'Enviar e-mail',
    external: false,
  },
  {
    id: 'linkedin',
    icon: LinkedInIcon,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wesley-santos-515b73152/',
    label: 'Ver perfil',
    external: true,
  },
  {
    id: 'github',
    icon: GitHubIcon,
    title: 'GitHub',
    href: 'https://github.com/Wesleyti007',
    label: 'Ver repositórios',
    external: true,
  },
  {
    id: 'phone',
    icon: PhoneIcon,
    title: 'Telefone',
    href: 'tel:+5511957620875',
    label: '(11) 95762-0875',
    external: false,
    secondary: {
      icon: WhatsAppIcon,
      href: 'https://wa.me/5511957620875',
      label: 'WhatsApp',
    },
  },
];

const Contact = () => {
  return (
    <PageSection maxWidth="md">
      <SectionHeader
        className="animate-fade-in-up"
        eyebrow="Contato"
        title="Vamos conversar?"
        subtitle="Fico à disposição para oportunidades, projetos e networking."
        align="center"
      />

      <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const SecondaryIcon = item.secondary?.icon;

          return (
            <Grid item xs={12} sm={6} key={item.id}>
              <Paper
                elevation={0}
                className={index % 2 === 0 ? 'animate-fade-in-up-delay-1' : 'animate-fade-in-up-delay-2'}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  height: '100%',
                  ...glassPanelSx,
                  ...cardHoverSx,
                  textAlign: 'center',
                  '@media (hover: none)': {
                    '&:hover': { transform: 'none' },
                  },
                }}
              >
                <Stack alignItems="center" spacing={1}>
                  <IconButton
                    href={item.href}
                    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    aria-label={item.title}
                    sx={{
                      color: colors.accent,
                      bgcolor: 'rgba(56, 189, 248, 0.1)',
                      border: `1px solid rgba(56, 189, 248, 0.25)`,
                      mb: 0.5,
                      '&:hover': { bgcolor: 'rgba(56, 189, 248, 0.18)' },
                    }}
                  >
                    <Icon fontSize="medium" />
                  </IconButton>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Link
                    href={item.href}
                    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    underline="hover"
                    color="inherit"
                    sx={{ color: 'text.secondary' }}
                  >
                    {item.label}
                  </Link>
                  {item.secondary && (
                    <IconButton
                      href={item.secondary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.secondary.label}
                      size="small"
                      sx={{ color: colors.primaryLight }}
                    >
                      {SecondaryIcon && <SecondaryIcon fontSize="small" />}
                    </IconButton>
                  )}
                </Stack>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      <Typography
        variant="body2"
        sx={{ color: 'text.secondary', mt: 4, textAlign: 'center' }}
        className="animate-fade-in-up-delay-3"
      >
        São Paulo – SP
      </Typography>
    </PageSection>
  );
};

export default Contact;
