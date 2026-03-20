import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const VARIANTS = [
  { value: 'standard', label: 'Standard' },
  { value: 'outlined', label: 'Outlined' },
  { value: 'filled', label: 'Filled' },
];

/**
 * SectionInput 컴포넌트
 * MUI TextField의 variant별 동작을 테스트하는 섹션
 *
 * Example usage:
 * <SectionInput />
 */
function SectionInput() {
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' });

  const handleChange = (variant) => (e) => {
    setValues((prev) => ({ ...prev, [variant]: e.target.value }));
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 3, md: 4 }, boxShadow: 1 }}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 3 }}>
        Input
      </Typography>

      {VARIANTS.map(({ value, label }, idx) => (
        <Box key={value}>
          {idx !== 0 && <Divider sx={{ my: 3 }} />}
          <Typography
            variant='caption'
            sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, mb: 2, display: 'block' }}
          >
            {label}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 3, flexWrap: 'wrap' }}>
            <TextField
              variant={value}
              label={`${label} Label`}
              placeholder={`${label} 입력...`}
              value={values[value]}
              onChange={handleChange(value)}
              sx={{ minWidth: 220 }}
            />
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              입력값:{' '}
              <Box component='span' sx={{ color: 'primary.main', fontWeight: 500 }}>
                {values[value] || '(없음)'}
              </Box>
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default SectionInput;
