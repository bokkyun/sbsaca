import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const MENU_ITEMS = ['홈', '소개', '서비스', '연락처'];

/**
 * SectionNavigation 컴포넌트
 * MUI AppBar + Toolbar 기반 반응형 네비게이션 테스트 섹션
 *
 * Example usage:
 * <SectionNavigation />
 */
function SectionNavigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleMenuClick = (item) => {
    handleMenuClose();
    alert(`"${item}" 메뉴를 클릭했습니다.`);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 3, md: 4 }, boxShadow: 1 }}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 3 }}>
        Navigation
      </Typography>

      {/* 데스크톱 */}
      <Box>
        <Typography
          variant='caption'
          sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, mb: 2, display: 'block' }}
        >
          Desktop
        </Typography>
        <AppBar position='static' sx={{ borderRadius: 1 }}>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1, fontWeight: 700 }}>
              Logo
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {MENU_ITEMS.map((item) => (
                <Button
                  key={item}
                  color='inherit'
                  onClick={() => handleMenuClick(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* 모바일 */}
      <Box>
        <Typography
          variant='caption'
          sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, mb: 2, display: 'block' }}
        >
          Mobile (햄버거 메뉴)
        </Typography>
        <AppBar position='static' sx={{ borderRadius: 1, maxWidth: 360 }}>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1, fontWeight: 700 }}>
              Logo
            </Typography>
            <IconButton
              color='inherit'
              onClick={handleMenuOpen}
              aria-label='메뉴 열기'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {MENU_ITEMS.map((item) => (
                <MenuItem
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  sx={{ minWidth: 140 }}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>

      {/* 반응형 안내 */}
      <Box sx={{ mt: 3, px: 2, py: 1.5, bgcolor: 'grey.100', borderRadius: 1 }}>
        <Typography variant='caption' sx={{ color: 'text.secondary' }}>
          현재 화면: <Box component='span' sx={{ color: 'primary.main', fontWeight: 600 }}>
            {isMobile ? '모바일 (md 미만)' : '데스크톱 (md 이상)'}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default SectionNavigation;
