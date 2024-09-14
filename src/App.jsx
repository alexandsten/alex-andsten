import { Link, Element } from 'react-scroll';
import CV from './assets/AlexAndstenCV.pdf';
import './App.css';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import fadeIn from 'react-animations/lib/fade-in';
import styled, { keyframes } from 'styled-components';  
import al3 from './img/alexTransparent.png';
import whiteBg from './img/whiteBg.jpg';
import { Stack, Typography, GlobalStyles, Grid, Fade } from '@mui/material';
import { styled as muiStyled } from '@mui/system'; 
import { useMediaQuery } from '@mui/material';
import slideInRight from 'react-animations/lib/slide-in-right';
import slideInLeft from 'react-animations/lib/slide-in-left';

const SlideInRightAnimation = keyframes`${slideInRight}`;

const SlideInRightDiv = styled.div`
  animation: 1s ${SlideInRightAnimation};
`;

const SlideInLeftAnimation = keyframes`${slideInLeft}`;

const SlideInLeftDiv = styled.div`
  animation: 1s ${SlideInLeftAnimation};
`;

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 3s ${fadeAnimation};
`;

function App() {

  const CustomTypography = muiStyled(Typography)(({ theme }) => ({
    '&::first-letter': {
      fontSize: '24px',
      fontWeight: 'bold',
    },
  }));

  const Line = muiStyled('div')({
    width: '100%',
    height: '3px',
    backgroundColor: 'black',
  });

  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  const isLargeScreen = useMediaQuery('(max-width:1400px)');

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            overflowX: 'hidden',
            maxWidth: '100vw',
          },
          html: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Stack
        maxWidth={'100vw'}
        minHeight={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          backgroundImage: `url(${whiteBg})`,
          backgroundSize: isSmallScreen ? 'stretch' : 'contain',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Stack minHeight={'100vh'} width={'100%'}>
          <Stack width={'100%'} flexDirection={'row-reverse'} position={'absolute'}>
            <Stack flexDirection={'column'} mt={4} gap={1}>
              <Link to="section1" smooth={true} duration={500}>
                <Typography sx={{ fontFamily: 'Gotu', fontSize: '18px' }}>
                  Experience & skills
                </Typography>
              </Link>
              <Link to="section2" smooth={true} duration={500}>
                <Typography sx={{ fontFamily: 'Gotu', fontSize: '18px' }}>
                  Work & projects
                </Typography>
              </Link>
              <Link to="section3" smooth={true} duration={500}>
                <Typography sx={{ fontFamily: 'Gotu', fontSize: '18px' }}>
                  Contact
                </Typography>
              </Link>
              <a href={CV} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}>
                <Typography sx={{ fontFamily: 'Gotu', fontSize: '18px' }}>
                  CV in Swedish
                </Typography>
              </a>
            </Stack>
          </Stack>

          <Stack className="para" width={'100%'} height={'100%'}>
            <Stack
              width={'100%'}
              height={'100%'}
              flexDirection={'column'}
              alignItems={'flex-end'}
              justifyContent={'flex-end'}
            >
              
                  <Stack width={'100%'} height={'100%'} spacing={1} pt={5}>
                    <Stack flexDirection={'column'} ml={5} pt={3} height={'100%'} width={'100%'} 
                    justifyContent={'spread-evenly'} 
                    alignItems={'center'}>
                      <SlideInLeftDiv>
                        <Typography
                          sx={{
                            fontSize: isSmallScreen ? '3em' : '10em',
                            fontFamily: 'Major Mono Display',
                          }}
                        >
                          Alex
                        </Typography>
                      </SlideInLeftDiv>
                      <SlideInRightDiv>
                        <Typography
                          sx={{
                            fontSize: isSmallScreen ? '3em' : '10em',
                            fontFamily: 'Major Mono Display',
                          }}
                        >
                          Andstén
                        </Typography>
                      </SlideInRightDiv>
                    </Stack>
                  </Stack>
                <Stack  height={'100%'} width={'100%'} justifyContent={'flex-end'} 
                  alignItems={'center'} 
                  position={'absolute'}
                  flexDirection={'column'}
                  >
                  <img
                    src={al3}
                    alt="Alex"
                    style={{ width: isSmallScreen ? '30%' : '30em', height: 'auto', maxWidth: '1080px', maxHeight: '950px' }}
                  />
                </Stack>
                
            </Stack>
          </Stack>
        </Stack>

        <Element name="section1">
          <AboutMe />
        </Element>

        <Element name="section2">
          <MyProjects />
        </Element>

        <Element name="section3">
          <Footer />
        </Element>
      </Stack>
    </>
  );
}

export default App;
