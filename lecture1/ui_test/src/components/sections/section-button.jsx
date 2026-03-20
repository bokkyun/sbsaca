import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

/**
 * SectionButton 컴포넌트
 * MUI Button의 variant와 color 조합을 테스트하는 섹션
 *
 * Example usage:
 * <SectionButton />
 */
function SectionButton() {
  const handleClick = (variant, color) => {
    alert(`클릭! variant="${variant}" / color="${color}"`);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 3, md: 4 }, boxShadow: 1 }}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 3 }}>
        Button
      </Typography>

      {VARIANTS.map((variant, idx) => (
        <Box key={variant}>
          {idx !== 0 && <Divider sx={{ my: 3 }} />}
          <Typography
            variant='caption'
            sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, mb: 2, display: 'block' }}
          >
            {variant}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {COLORS.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                onClick={() => handleClick(variant, color)}
              >
                {color}
              </Button>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default SectionButton;
