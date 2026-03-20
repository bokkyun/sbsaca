import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const FRUITS = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'orange', label: '오렌지' },
  { value: 'grape', label: '포도' },
  { value: 'watermelon', label: '수박' },
  { value: 'strawberry', label: '딸기' },
];

const VARIANTS = [
  { value: 'outlined', label: 'Outlined' },
  { value: 'filled', label: 'Filled' },
  { value: 'standard', label: 'Standard' },
];

/**
 * SectionDropdown 컴포넌트
 * MUI Select 컴포넌트의 variant별 동작을 테스트하는 섹션
 *
 * Example usage:
 * <SectionDropdown />
 */
function SectionDropdown() {
  const [values, setValues] = useState({ outlined: '', filled: '', standard: '' });

  const handleChange = (variant) => (e) => {
    setValues((prev) => ({ ...prev, [variant]: e.target.value }));
  };

  const getSelectedLabel = (value) => {
    return FRUITS.find((f) => f.value === value)?.label ?? null;
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 3, md: 4 }, boxShadow: 1 }}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 3 }}>
        Dropdown
      </Typography>

      {VARIANTS.map(({ value: variant, label }, idx) => (
        <Box key={variant}>
          {idx !== 0 && <Divider sx={{ my: 3 }} />}
          <Typography
            variant='caption'
            sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, mb: 2, display: 'block' }}
          >
            {label}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
            <FormControl variant={variant} sx={{ minWidth: 200 }}>
              <InputLabel>과일 선택</InputLabel>
              <Select
                value={values[variant]}
                label={variant !== 'standard' ? '과일 선택' : undefined}
                onChange={handleChange(variant)}
              >
                {FRUITS.map(({ value, label: optLabel }) => (
                  <MenuItem key={value} value={value}>
                    {optLabel}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                선택된 값:
              </Typography>
              {getSelectedLabel(values[variant]) ? (
                <Chip
                  label={getSelectedLabel(values[variant])}
                  color='primary'
                  size='small'
                />
              ) : (
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  (없음)
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default SectionDropdown;
