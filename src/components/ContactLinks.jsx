import { Stack, Typography, Grid } from '@mui/material';
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
      height={'100vh'}
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
            fontSize: '4em',
          }}
        >
          Lets get in touch!
        </Typography>
      </AnimatedTada>
      {/* <h3>Contact me</h3> */}
      <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>

        <Grid container width={'75%'} spacing={3}>

        <Grid item xs={12} md={6} xl={3}  justifyContent={'center'} alignItems={'center'}>
          <a href="https://github.com/alexandsten" target="_blank">
            <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>Github</Typography>
          </a>
        </Grid>
        
        <Grid item xs={12} md={6} xl={3}>
          <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>
            +46 76 260 82 27
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6} xl={3}>
          <a href="https://linkedin.com/in/alex-andstén-47937116b" target="_blank">
            <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>Linkedin</Typography>
          </a>
        </Grid>

        <Grid item xs={12} md={6} xl={3}>
          <a href="mailto:alex.andsten@hotmail.com">
            <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>
              alex.andsten@hotmail.com
            </Typography>
          </a>
        </Grid>

        </Grid>
      </Stack>

      <Stack width={'100%'} height={'20%'} justifyContent={'flex-end'} alignItems={'center'}>
        <Typography sx={{ color: 'white', fontFamily: 'Gotu', fontSize: '8px' }}>
            Background images Designed by Freepik
        </Typography>
      </Stack>

    </Stack>
  );
};

export default ContactLinks;
