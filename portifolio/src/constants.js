export const colors = {
  bgBase: '#0f172a',
  bgSurface: '#1e293b',
  bgDeep: '#0a0f1a',
  bgGradient: 'linear-gradient(145deg, #0f172a 0%, #1e293b 55%, #1e1b4b 100%)',
  navbar: 'rgba(15, 23, 42, 0.82)',
  primary: '#6366f1',
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  accent: '#38bdf8',
  text: '#f8fafc',
  textMuted: 'rgba(248, 250, 252, 0.72)',
  border: 'rgba(255, 255, 255, 0.1)',
  glass: 'rgba(255, 255, 255, 0.06)',
  glassStrong: 'rgba(255, 255, 255, 0.1)',
  glassHover: 'rgba(255, 255, 255, 0.12)',
  projectImageBg: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
  projectImageBorder: 'rgba(99, 102, 241, 0.12)',
};

export const PAGE_GRADIENT = colors.bgGradient;

export const categoryColors = {
  tech: '#38bdf8',
  entrepreneur: '#818cf8',
  military: '#94a3b8',
};

export const layout = {
  sectionPy: { xs: 5, sm: 7, md: 9 },
  containerPx: { xs: 2, sm: 3, md: 4 },
  maxContentWidth: 1120,
};

export const glassCardSx = {
  background: colors.glass,
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: `1px solid ${colors.border}`,
  borderRadius: { xs: 2.5, md: 4 },
  color: colors.text,
  transition: 'transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
};

export const glassPanelSx = {
  background: colors.glassStrong,
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: `1px solid ${colors.border}`,
  borderRadius: { xs: 2.5, md: 3 },
  transition: 'transform 0.25s ease, background-color 0.25s ease',
};

export const cardHoverSx = {
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
    bgcolor: colors.glassHover,
  },
};

export const gradientTextSx = {
  background: `linear-gradient(135deg, ${colors.text} 0%, ${colors.accent} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};
