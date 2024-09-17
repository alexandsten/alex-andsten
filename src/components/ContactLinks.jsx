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

  const isSmallScreen = useMediaQuery('(max-width:1200px)');

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
            fontSize: isSmallScreen ? '2em' : '4em',
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
            <Stack flexDirection={'row'} gap={1}>
              <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="github-logo"/>
              <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>Github</Typography>
            </Stack>
          </a>
        </Grid>
        
        <Grid item xs={12} md={6} xl={3}>
          <Stack flexDirection={'row'} gap={1}>
            <img width="30" height="30" src="https://img.icons8.com/external-flat-juicy-fish/60/external-phone-contact-us-flat-flat-juicy-fish-2.png" alt="external-phone-contact-us-flat-flat-juicy-fish-2"/>
            <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>
              +46 76 260 82 27
            </Typography>
          </Stack>
        </Grid>
        
        
        <Grid item xs={12} md={6} xl={3}>
          <a href="https://linkedin.com/in/alex-andstén-47937116b" target="_blank">
            <Stack flexDirection={'row'} gap={1}>
              <img width="30" height="30" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
              <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>Linkedin</Typography>
            </Stack>
          </a>
        </Grid>

        <Grid item xs={12} md={6} xl={3}>
          <a href="mailto:alex.andsten@hotmail.com">
            <Stack flexDirection={'row'} gap={1}>
              <img width="30" height="30" src="https://img.icons8.com/color/48/secured-letter--v1.png" alt="secured-letter--v1"/>
              <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>
                alex.andsten@hotmail.com
              </Typography>
            </Stack>
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
