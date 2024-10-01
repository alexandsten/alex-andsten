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
            <Stack flexDirection={'row'} gap={2}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" 
            style={{ transform: 'translateY(-4px)' }} ><path fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
              <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>Github</Typography>
            </Stack>
          </a>
        </Grid>
        
        <Grid item xs={12} md={6} xl={3}>
          <Stack flexDirection={'row'} gap={2}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256" 
            style={{ transform: 'translateY(-4px)' }} ><path fill="white" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"/></svg>
            <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>
              +46 76 260 82 27
            </Typography>
          </Stack>
        </Grid>
        
        
        <Grid item xs={12} md={6} xl={3}>
          <a href="https://linkedin.com/in/alex-andstén-47937116b" target="_blank">
            <Stack flexDirection={'row'} gap={2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" style={{ transform: 'translateY(-6px)' }} ><path fill="white" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
              <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>Linkedin</Typography>
            </Stack>
          </a>
        </Grid>

        <Grid item xs={12} md={6} xl={3}>
          <a href="mailto:alex.andsten@hotmail.com">
            <Stack flexDirection={'row'} gap={2} >
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" 
              style={{ transform: 'translateY(-2px)' }} ><path fill="white" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
              <Typography sx={{ color: 'white', fontFamily: 'Gotu' }}>
                alex.andsten@hotmail.com
              </Typography>
            </Stack>
          </a>
        </Grid>

        </Grid>
      </Stack>

      <Stack width={'75%'} height={'20%'} justifyContent={'flex-end'} alignItems={'flex-end'}>
        <Typography sx={{ color: 'white', fontFamily: 'Gotu', fontSize: '10px' }}>
          Designed by Alex Andstén, Background images by Freepik, Icons by Icons8
        </Typography>
      </Stack>

    </Stack>
  );
};

export default ContactLinks;