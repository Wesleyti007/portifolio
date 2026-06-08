import { Box, Typography, Chip, Stack } from '@mui/material';
import { careerTimeline, categoryLabels } from '../data/career';
import { categoryColors, colors, cardHoverSx, glassCardSx } from '../constants';

const CareerTimeline = () => {
  return (
    <Box>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: { xs: 3, md: 4 } }}>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <Chip
            key={key}
            label={label}
            size="small"
            sx={{
              bgcolor: `${categoryColors[key]}22`,
              color: categoryColors[key],
              border: `1px solid ${categoryColors[key]}55`,
              fontWeight: 600,
            }}
          />
        ))}
      </Stack>

      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 15, sm: 19 },
            top: 8,
            bottom: 8,
            width: 2,
            background: `linear-gradient(180deg, ${colors.accent}, ${colors.primary}, ${colors.border})`,
            borderRadius: 1,
          }}
        />

        <Stack spacing={{ xs: 2.5, md: 3 }}>
          {careerTimeline.map((item) => {
            const color = categoryColors[item.category];

            return (
              <Box
                key={item.id}
                sx={{
                  position: 'relative',
                  pl: { xs: 5, sm: 6 },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 8, sm: 12 },
                    top: { xs: 20, md: 24 },
                    width: { xs: 14, md: 16 },
                    height: { xs: 14, md: 16 },
                    borderRadius: '50%',
                    bgcolor: color,
                    border: `3px solid ${colors.bgSurface}`,
                    boxShadow: `0 0 0 4px ${color}33, 0 0 16px ${color}44`,
                    zIndex: 1,
                  }}
                />

                <Box
                  sx={{
                    p: { xs: 2, sm: 2.5, md: 3 },
                    ...glassCardSx,
                    ...cardHoverSx,
                    '@media (hover: none)': {
                      '&:hover': { transform: 'none' },
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 1.5 }}
                  >
                    <Chip
                      label={item.period}
                      size="small"
                      sx={{
                        bgcolor: `${color}22`,
                        color,
                        fontWeight: 700,
                        border: `1px solid ${color}55`,
                      }}
                    />
                    <Chip
                      label={categoryLabels[item.category]}
                      size="small"
                      variant="outlined"
                      sx={{ color: 'text.secondary', borderColor: colors.border }}
                    />
                  </Stack>

                  <Typography
                    variant="h6"
                    sx={{
                      color,
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: { xs: '1rem', md: '1.15rem' },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {item.company} — {item.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      textAlign: { xs: 'left', md: 'justify' },
                      mb: item.highlights.length ? 2 : 0,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.summary}
                  </Typography>

                  {item.highlights.length > 0 && (
                    <Box
                      component="ul"
                      sx={{
                        m: 0,
                        pl: 2.5,
                        display: 'grid',
                        gap: 0.75,
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                      }}
                    >
                      {item.highlights.map((highlight) => (
                        <Typography
                          key={highlight}
                          component="li"
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                        >
                          {highlight}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default CareerTimeline;
