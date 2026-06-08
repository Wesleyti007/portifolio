import './Footer.css';
import { Box, IconButton, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { colors } from '../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: { xs: 1.5, sm: 2 },
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          © {new Date().getFullYear()} Desenvolvido por{' '}
          <Link
            href="https://www.linkedin.com/in/wesley-santos-515b73152/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ color: colors.accent, fontWeight: 600 }}
          >
            Wesley
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton
            href="https://github.com/Wesleyti007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            size="small"
            sx={{
              color: 'text.secondary',
              border: `1px solid ${colors.border}`,
              '&:hover': { color: colors.accent, bgcolor: colors.glass },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/wesley-santos-515b73152/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            size="small"
            sx={{
              color: 'text.secondary',
              border: `1px solid ${colors.border}`,
              '&:hover': { color: colors.accent, bgcolor: colors.glass },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
