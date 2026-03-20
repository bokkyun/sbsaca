import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SLIDES = [
  { id: 0, bg: '#1976d2', emoji: '🌊', title: '첫 번째 슬라이드', desc: '← 스와이프하거나 버튼을 눌러보세요' },
  { id: 1, bg: '#9c27b0', emoji: '🌸', title: '두 번째 슬라이드', desc: '터치/마우스 드래그 모두 지원합니다' },
  { id: 2, bg: '#2e7d32', emoji: '🌿', title: '세 번째 슬라이드', desc: '좌우 제스처로 이동합니다' },
  { id: 3, bg: '#e65100', emoji: '🔥', title: '네 번째 슬라이드', desc: '현재 인덱스가 하단에 표시됩니다' },
  { id: 4, bg: '#00695c', emoji: '✨', title: '다섯 번째 슬라이드', desc: '마지막 슬라이드입니다' },
];

/**
 * SectionSwipe 컴포넌트
 * react-swipeable 기반 터치/마우스 스와이프 슬라이더 섹션
 *
 * Example usage:
 * <SectionSwipe />
 */
function SectionSwipe() {
  const [current, setCurrent] = useState(0);
  const [swipeDir, setSwipeDir] = useState(null);

  const goPrev = () => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));

  const handlers = useSwipeable({
    onSwipedLeft: () => { setSwipeDir('← Left'); goNext(); },
    onSwipedRight: () => { setSwipeDir('→ Right'); goPrev(); },
    onSwiping: ({ dir }) => setSwipeDir(`스와이프 중... (${dir})`),
    onSwiped: () => setTimeout(() => setSwipeDir(null), 800),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const slide = SLIDES[current];

  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: { xs: 3, md: 4 }, boxShadow: 1 }}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 3 }}>
        Swipe
      </Typography>

      {/* 슬라이더 영역 */}
      <Box
        {...handlers}
        sx={{
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          height: { xs: 220, md: 280 },
          bgcolor: slide.bg,
          cursor: 'grab',
          userSelect: 'none',
          transition: 'background-color 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {/* 슬라이드 콘텐츠 */}
        <Typography sx={{ fontSize: { xs: '3rem', md: '4rem' }, lineHeight: 1 }}>
          {slide.emoji}
        </Typography>
        <Typography variant='h5' sx={{ color: 'white', fontWeight: 700, textAlign: 'center', px: 2 }}>
          {slide.title}
        </Typography>
        <Typography variant='body2' sx={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', px: 2 }}>
          {slide.desc}
        </Typography>

        {/* 이전 버튼 */}
        <IconButton
          onClick={goPrev}
          sx={{
            position: 'absolute',
            left: 8,
            bgcolor: 'rgba(255,255,255,0.25)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.45)' },
          }}
        >
          <ArrowBackIosNewIcon fontSize='small' />
        </IconButton>

        {/* 다음 버튼 */}
        <IconButton
          onClick={goNext}
          sx={{
            position: 'absolute',
            right: 8,
            bgcolor: 'rgba(255,255,255,0.25)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.45)' },
          }}
        >
          <ArrowForwardIosIcon fontSize='small' />
        </IconButton>
      </Box>

      {/* 하단 인디케이터 + 스와이프 감지 표시 */}
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
        {/* 도트 인디케이터 */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {SLIDES.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => setCurrent(idx)}
              sx={{
                width: idx === current ? 24 : 8,
                height: 8,
                borderRadius: '4px',
                bgcolor: idx === current ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>

        {/* 인덱스 + 스와이프 방향 */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Typography variant='caption' sx={{ color: 'text.secondary' }}>
            슬라이드{' '}
            <Box component='span' sx={{ color: 'primary.main', fontWeight: 700 }}>
              {current + 1}
            </Box>
            {' '}/ {SLIDES.length}
          </Typography>
          {swipeDir && (
            <Typography variant='caption' sx={{ color: 'secondary.main', fontWeight: 600 }}>
              {swipeDir}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default SectionSwipe;
