import './Footer.css';
import { Box, IconButton, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}> 
      <Typography variant="body2" sx={{ color: 'common.white' }}>
          © {new Date().getFullYear()} Desenvolvido por{' '}
          <Link href="https://www.linkedin.com/in/wesley-santos-515b73152/" target="_blank" underline="hover" sx={{ color: 'common.white' }}>
            Wesley
          </Link>
        </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton href="https://github.com/Wesleyti007" target="_blank" rel="noopener" color="inherit">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/wesley-santos-515b73152/" target="_blank" rel="noopener" color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Box>
          </Box>
    </footer>
  );
};

export default Footer;
