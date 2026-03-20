import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const HOVER_CARDS = [
  {
    id: 'color',
    title: '색상 변화',
    desc: '배경색이 전환됩니다',
    sx: {
      bgcolor: 'primary.main',
      color: 'white',
      transition: 'background-color 0.3s ease',
      '&:hover': { bgcolor: 'secondary.main' },
    },
  },
  {
    id: 'scale',
    title: '크기 변화',
    desc: '카드가 확대됩니다',
    sx: {
      bgcolor: 'grey.100',
      border: '2px solid',
      borderColor: 'grey.300',
      transition: 'transform 0.25s ease',
      '&:hover': { transform: 'scale(1.08)' },
    },
  },
  {
    id: 'shadow',
    title: '그림자 효과',
    desc: '그림자가 깊어집니다',
    sx: {
      bgcolor: 'background.paper',
      boxShadow: 1,
      transition: 'box-shadow 0.3s ease',
      '&:hover': { boxShadow: 10 },
    },
  },
  {
    id: 'border',
    title: '테두리 강조',
    desc: '테두리가 나타납니다',
    sx: {
      bgcolor: 'background.paper',
      border: '2px solid transparent',
      boxShadow: 1,
      transition: 'border-color 0.25s ease, transform 0.25s ease',
      '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' },
    },
  },
  {
    id: 'overlay',
    title: '오버레이',
    desc: '반투명 레이어가 덮입니다',
    sx: {
      bgcolor: 'info.main',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        bgcolor: 'rgba(0,0,0,0)',
        transition: 'background-color 0.3s ease',
      },
      '&:hover::after': { bgcolor: 'rgba(0,0,0,0.25)' },
    },
  },
  {
    id: 'slide',
    title: '텍스트 슬라이드',
    desc: '위로 이동합니다',
    sx: {
      bgcolor: 'success.main',
      color: 'white',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
    },
  },
];

/**
 * SectionHover 컴포넌트
 * 다양한 CSS hover 효과를 MUI sx로 구현한 테스트 섹션
 *
 * Example usage:
 * <SectionHover />
 */
function SectionHover() {
  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 3, md: 4 }, boxShadow: 1 }}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 1 }}>
        Hover Effects
      </Typography>
      <Typography variant='body2' sx={{ color: 'text.secondary', mb: 3 }}>
        카드 위에 마우스를 올려보세요
      </Typography>

      <Grid container spacing={2}>
        {HOVER_CARDS.map(({ id, title, desc, sx }) => (
          <Grid key={id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                borderRadius: 2,
                p: 3,
                cursor: 'pointer',
                userSelect: 'none',
                minHeight: 120,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                ...sx,
              }}
            >
              <Typography variant='subtitle1' sx={{ fontWeight: 600, mb: 0.5 }}>
                {title}
              </Typography>
              <Typography variant='body2' sx={{ opacity: 0.8 }}>
                {desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SectionHover;
