import React, { useState, useEffect } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import CV from './assets/AlexAndstenCV.pdf';
import './App.css';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import fadeIn from 'react-animations/lib/fade-in';
import styled, { keyframes } from 'styled-components';  
import al3 from './img/transpbackground2.png';
import whiteBg from './img/whiteBg.jpg';
import { Stack, Typography, GlobalStyles, IconButton, Drawer, Grid } from '@mui/material';
import { styled as muiStyled } from '@mui/system'; 
import { useMediaQuery } from '@mui/material';
import slideInRight from 'react-animations/lib/slide-in-right';
import slideInLeft from 'react-animations/lib/slide-in-left';


const roles = ['web developer', 'programmer', 'UI designer', 'tech enthusiast'];

const SlideInRightAnimation = keyframes`${slideInRight}`;

const SlideInRightDiv = styled.div`
  animation: 2s ${SlideInRightAnimation};
`;

const SlideInLeftAnimation = keyframes`${slideInLeft}`;

const SlideInLeftDiv = styled.div`
  animation: 2s ${SlideInLeftAnimation};
`;

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 3s ${fadeAnimation};
`;

function App() {

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting ? roles[index].substring(0, prev.length - 1) : roles[index].substring(0, prev.length + 1)
      );
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && displayText === roles[index]) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, charIndex]);
  
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
  const isMiniScreen = useMediaQuery('(max-width:600px)');
  const isLargeScreen = useMediaQuery('(max-width:1400px)');

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if (open === false) {
      window.scrollTo(0, scrollPosition); 
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Stack width={'100%'} maxHeight={'0vh'} flexDirection={'row-reverse'} zIndex={10} 
            sx={{
            position: 'sticky',
            top: 0,
            zIndex: 10, 
            overflowX: 'hidden'
          }}>
          <Stack m={2} pb={2} sx={{ backgroundColor: 'white', width: '3em', height: '3em', borderRadius: '50%'}}>
            <IconButton onClick={toggleDrawer(true)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"/></svg>
            </IconButton>
          </Stack>
        </Stack>
      <Stack
        maxWidth={'100vw'}
        minHeight={ isSmallScreen ? '33vh': '100vh'}
        sx={{
          backgroundImage: `url(${whiteBg})`,
          backgroundSize: isSmallScreen ? 'stretch' : 'contain',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Stack minHeight={ isSmallScreen ? '33vh': '100vh'}  width={'100%'} flexDirection={'column'} 
          sx={{
              backgroundImage: `url(${al3})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center left',
              backgroundRepeat: 'no-repeat',
            }}  
          >
          

          <Stack className="para" width={'100%'} height={'100%'} >
            <Stack
              width={'100%'}
              height={'100%'}
              flexDirection={'column'}
              alignItems={'center'}   
              justifyContent={'center'}  
              position={'relative'}   
              
            >
              <Stack
                width={'100%'}
                height={'100%'}
                spacing={1}
                pt={5}
                position={'relative'}
              >
                <Stack
                  flexDirection={'column'}
                  ml={5}
                  pt={3}
                  height={'100%'}
                  width={'100%'}
                  justifyContent={'center'}  
                  alignItems={'flex-end'}
                  
                >
                  <SlideInLeftDiv>
                    <div style={{ color: 'grey', fontFamily: 'Pixelify Sans', fontSize: isMiniScreen ? '0.8em' : isSmallScreen ? '1em' : '2em', marginRight: '2em' }}>
                      I'm a {displayText}
                    </div>
                  </SlideInLeftDiv>
                  <SlideInLeftDiv>
                    <Typography
                      sx={{
                        fontSize: isMiniScreen ? '2em' : isSmallScreen ? '5em' : '10em',
                        fontFamily: 'Major Mono Display',
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0 0 10px rgba(0, 0, 0, 0.8)' 
                      }}
                    >
                      Alex
                    </Typography>
                  </SlideInLeftDiv>
                  <SlideInLeftDiv>
                    <Typography
                      sx={{
                        fontSize: isMiniScreen ? '2em' : isSmallScreen ? '5em' : '10em',
                        fontFamily: 'Major Mono Display',
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0 0 10px rgba(0, 0, 0, 0.8)' 
                      }}
                    >
                      Andstén
                    </Typography>
                  </SlideInLeftDiv>
                </Stack>
              </Stack>

              {/* <Stack
                width={'100%'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                bottom={0}
                left={0}
              >
                <img
                  src={al3}
                  alt="Alex"
                  style={{
                    width: isSmallScreen ? '75%' : '50%',
                    height: 'auto',
                  }}
                />
              </Stack> */}
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
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 9999 }}
      >
        <Stack role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Grid container direction="column" spacing={2} sx={{ padding: '20px', backgroundColor: '#141414', height: '102vh', overflow: 'hidden' }}>
            <Grid item>
              <Link to="section1" smooth={true} duration={500} onClick={toggleDrawer(false)}>
                <Typography sx={{ fontFamily: 'Gotu', fontSize: '18px', color: 'white' }}>
                  Experience & skills
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="section2" smooth={true} duration={500} onClick={toggleDrawer(false)}>
                <Typography sx={{ fontFamily: 'Gotu', fontSize: '18px', color: 'white' }}>
                  Work & projects
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="section3" smooth={true} duration={500} onClick={toggleDrawer(false)}>
                <Typography sx={{ fontFamily: 'Gotu', fontSize: '18px', color: 'white' }}>
                  Contact
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <a href={CV} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}} onClick={toggleDrawer(false)}>
                <Typography sx={{ fontFamily: 'Gotu', fontSize: '18px', color: 'white' }}>
                  Curriculum Vitae
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Stack>
      </Drawer>
    </>
  );
}

export default App;
