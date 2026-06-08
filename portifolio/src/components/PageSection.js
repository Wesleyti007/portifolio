import { Box, Container } from '@mui/material';
import { PAGE_GRADIENT, colors, layout } from '../constants';

const BackgroundGlow = () => (
  <>
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: { xs: '-15%', md: '-20%' },
        right: { xs: '-30%', md: '-10%' },
        width: { xs: 280, md: 480 },
        height: { xs: 280, md: 480 },
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 70%)`,
        pointerEvents: 'none',
        animation: 'pulseGlow 8s ease-in-out infinite',
      }}
    />
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        bottom: { xs: '-10%', md: '-15%' },
        left: { xs: '-25%', md: '-8%' },
        width: { xs: 240, md: 400 },
        height: { xs: 240, md: 400 },
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)`,
        pointerEvents: 'none',
      }}
    />
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
        opacity: 0.35,
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
      }}
    />
  </>
);

const PageSection = ({ children, centered = true, maxWidth = 'lg', sx = {}, containerSx = {} }) => (
  <Box
    component="section"
    sx={{
      position: 'relative',
      minHeight: { xs: 'auto', md: '100vh' },
      py: layout.sectionPy,
      background: PAGE_GRADIENT,
      color: 'text.primary',
      overflow: 'hidden',
      ...(centered && {
        display: 'flex',
        alignItems: { xs: 'stretch', md: 'center' },
      }),
      ...sx,
    }}
  >
    <BackgroundGlow />
    <Container
      maxWidth={maxWidth}
      sx={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        px: layout.containerPx,
        ...containerSx,
      }}
    >
      {children}
    </Container>
  </Box>
);

export default PageSection;
