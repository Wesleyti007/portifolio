import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contato', path: '/contato' },
];

const linkStyle = {
  position: 'relative',
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '1.125rem',
  fontFamily: 'Poppins, Inter, sans-serif',
  letterSpacing: 0.5,
  textTransform: 'none',
  '&:after': {
    content: "''",
    position: 'absolute',
    left: 0,
    bottom: -2,
    width: 0,
    height: 2,
    backgroundColor: '#fff',
    transition: 'width 0.3s',
  },
  '&:hover:after': {
    width: '100%',
  },
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'blur(6px)',
          background: 'rgba(17,24,39,0.7)',
        }}
      >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 100 }}>
        <Box component={NavLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, ...linkStyle, fontSize: '1.5rem', fontWeight: 700 }}>
            <Box component="img" src="/logo.png" alt="logo" sx={{ height: 80, filter: 'invert(1)' }} />
            
            <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'Poppins, Inter, sans-serif', letterSpacing: 1 }}>
              WSTI
            </Typography>
          </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, ml: 4 }}>
          {navItems.map(({ label, path }) => (
            <Button key={path} component={NavLink} to={path} sx={linkStyle} end={path === '/'}>
              {label}
            </Button>
          ))}
        </Box>
          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { md: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'rgba(17,24,39,0.9)',
            backdropFilter: 'blur(6px)',
            color: '#fff',
          },
        }}
      >
        <Box sx={{ width: 240 }} role="presentation" onClick={handleDrawerToggle}>
          <List>
            {navItems.map(({ label, path }) => (
              <ListItem button key={path} component={NavLink} to={path} sx={{ color: 'inherit' }}>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
