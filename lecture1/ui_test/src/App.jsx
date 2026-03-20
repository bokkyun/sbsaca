import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SectionButton from './components/sections/section-button';
import SectionInput from './components/sections/section-input';
import SectionNavigation from './components/sections/section-navigation';
import SectionDropdown from './components/sections/section-dropdown';
import SectionHover from './components/sections/section-hover';
import SectionSwipe from './components/sections/section-swipe';

/**
 * App 컴포넌트
 * 16개 UI 섹션을 순차적으로 추가할 수 있는 메인 레이아웃
 *
 * 섹션 추가 방법:
 * 1. src/components/sections/ 에 섹션 컴포넌트 생성
 * 2. 아래 import 추가
 * 3. <SectionList> 안에 컴포넌트 삽입
 */
function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      bgcolor: 'grey.50',
      py: { xs: 4, md: 6 },
    }}>
      <Container maxWidth='lg'>

        {/* 페이지 헤더 */}
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography
            variant='h4'
            component='h1'
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
            }}
          >
            UI Component Test
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: 'text.secondary', mt: 1 }}
          >
            MUI 기반 UI 요소 테스트 페이지
          </Typography>
        </Box>

        {/* 섹션 목록 - 여기에 순서대로 섹션 컴포넌트를 추가하세요 */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
          <SectionButton />
          <SectionInput />
          <SectionNavigation />
          <SectionDropdown />
          <SectionHover />
          <SectionSwipe />
        </Box>

      </Container>
    </Box>
  );
}

export default App;
