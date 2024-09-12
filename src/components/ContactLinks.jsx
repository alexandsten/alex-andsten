import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes, css } from 'styled-components';
import { useMediaQuery } from '@mui/material';
import tada from 'react-animations/lib/tada';

const tadaAnimation = keyframes`${tada}`;

const AnimatedTada = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? css`2s ${tadaAnimation}` : 'none')};
  transition: opacity 0.5s ease-in-out;
`;

const ContactLinks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Stack
      height={'75vh'}
      width={'100vw'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ backgroundColor: 'black' }}
      gap={5}
    >
      <AnimatedTada ref={ref} isVisible={inView}>
        <Typography
          sx={{
            color: 'white',
            fontFamily: 'Gotu',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          Lets get in touch!
        </Typography>
      </AnimatedTada>
      <h3>Contact me</h3>
      <a href="mailto:alex.andsten@hotmail.com">
        <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>
          alex.andsten@hotmail.com
        </Typography>
      </a>
      <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>
        076-260 82 27
      </Typography>

      <a href="https://linkedin.com/in/alex-andstén-47937116b" target="_blank">
        <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>Linkedin</Typography>
      </a>

      <a href="https://github.com/alexandsten" target="_blank">
        <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>Github</Typography>
      </a>

      <Typography sx={{ color: 'white', fontFamily: 'Gotu', fontSize: '8px' }}>
        Background images Designed by Freepik
      </Typography>
    </Stack>
  );
};

export default ContactLinks;
