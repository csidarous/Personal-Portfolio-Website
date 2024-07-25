import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const TickerContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  height: '100px', // Adjust height as needed
  position: 'relative',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(1),
}));

const TickerContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  animation: 'tickerMove 10s linear infinite',
  '& div': {
    padding: theme.spacing(1),
  },
  '@keyframes tickerMove': {
    '0%': {
      top: '100%',
    },
    '100%': {
      top: '-100%',
    },
  },
}));

const VerticalTicker = ({ items }) => {
  return (
    <TickerContainer>
      <TickerContent>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </TickerContent>
    </TickerContainer>
  );
};

export default VerticalTicker;
