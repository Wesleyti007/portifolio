import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { colors } from '../constants';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contato', path: '/contato' },
];

const linkStyle = ({ isActive }) => ({
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: isActive ? 600 : 500,
  fontSize: { xs: '1rem', md: '0.95rem' },
  fontFamily: 'Poppins, Inter, sans-serif',
  letterSpacing: 0.3,
  textTransform: 'none',
  minWidth: 'auto',
  px: { md: 1.75 },
  py: 1,
  borderRadius: 2,
  opacity: isActive ? 1 : 0.82,
  bgcolor: isActive ? 'rgba(99, 102, 241, 0.18)' : 'transparent',
  transition: 'all 0.2s ease',
  '&:hover': {
    opacity: 1,
    bgcolor: 'rgba(56, 189, 248, 0.12)',
  },
});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: colors.navbar,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            minHeight: { xs: 64, md: 76 },
            px: { xs: 2, sm: 3, md: 4 },
            maxWidth: 1280,
            width: '100%',
            mx: 'auto',
          }}
        >
          <Typography
            component={NavLink}
            to="/"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.2rem', md: '1.35rem' },
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: 'Poppins, Inter, sans-serif',
              flexShrink: 0,
            }}
          >
            Wesley
          </Typography>

          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              gap: 0.5,
              p: 0.75,
              borderRadius: 999,
              bgcolor: colors.glass,
              border: `1px solid ${colors.border}`,
            }}
          >
            {navItems.map(({ label, path }) => (
              <Button key={path} component={NavLink} to={path} sx={linkStyle} end={path === '/'}>
                {label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'none' }, gap: 0.5, alignItems: 'center' }}>
            {navItems.map(({ label, path }) => (
              <Button key={path} component={NavLink} to={path} sx={linkStyle} end={path === '/'}>
                {label}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            sx={{
              display: { md: 'none' },
              border: `1px solid ${colors.border}`,
              borderRadius: 2,
            }}
            onClick={handleDrawerToggle}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 'min(88vw, 320px)',
            background: colors.bgBase,
            borderLeft: `1px solid ${colors.border}`,
            color: colors.text,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography fontWeight={700}>Menu</Typography>
          <IconButton onClick={handleDrawerToggle} aria-label="Fechar menu" color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1.5, pb: 3 }}>
          {navItems.map(({ label, path }) => (
            <ListItemButton
              key={path}
              component={NavLink}
              to={path}
              end={path === '/'}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                py: 1.5,
                '&.active': {
                  color: colors.accent,
                  bgcolor: 'rgba(56, 189, 248, 0.1)',
                  borderLeft: `3px solid ${colors.accent}`,
                },
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1.05rem' }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
