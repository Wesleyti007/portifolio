import { Box, Typography } from '@mui/material';

const SectionHeader = ({ eyebrow, title, subtitle, align = 'left', className = '' }) => (
  <Box
    className={className}
    sx={{
      mb: { xs: 3, md: 5 },
      textAlign: align,
      ...(align === 'center' && { mx: 'auto' }),
    }}
  >
    {eyebrow && (
      <Typography
        variant="overline"
        color="secondary"
        sx={{
          display: 'block',
          fontWeight: 700,
          letterSpacing: '0.14em',
          mb: 1,
          fontSize: { xs: '0.68rem', sm: '0.75rem' },
        }}
      >
        {eyebrow}
      </Typography>
    )}
    <Typography
      variant="h3"
      component="h1"
      sx={{
        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.65rem' },
        fontWeight: 700,
        lineHeight: 1.15,
        mb: subtitle ? 1.5 : 0,
      }}
    >
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: align === 'center' ? 640 : 720,
          mx: align === 'center' ? 'auto' : 0,
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default SectionHeader;
