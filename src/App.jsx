import { useState } from 'react'
import { Link, Element } from 'react-scroll';
import CV from './assets/AlexAndstenCV.pdf';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import ContactLinks from './components/ContactLinks'
import al3 from './img/alexTransparent.png'
import whiteBg from './img/whiteBg.jpg'
import { Stack, Typography, GlobalStyles, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { useMediaQuery} from '@mui/material';

function App() {

  const CustomTypography = styled(Typography)(({ theme }) => ({
    '&::first-letter': {
      fontSize: '24px',
      fontWeight: 'bold',
    },
  }));

  const Line = styled('div')({
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
            maxWidth: '100vw'
            // background: 'radial-gradient(circle, rgba(255,185,0,1) 0%, #ed652b 60%)',
            // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${texture2})`,
            // backgroundSize: 'cover',
          },
          html: {
            margin: 0,
            padding: 0,
          }
        }}
      />
    <Stack maxWidth={'100vw'} justifyContent={'center'} alignItems={'center'} sx={{ 
       backgroundImage:  `url(${whiteBg})` ,
      backgroundSize: 'contain', 
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat', 
    }}>
      
      <Stack  minHeight={'100vh'}  >
        
        <Stack >
          <Grid container >
            <Grid item xs={12} md={6}>
                <Stack flexDirection={'column'} ml={2} pt={3}>
                  <Typography sx={{ fontSize: isSmallScreen ? '1.5em' : '3em', fontFamily: "Major Mono Display" }}>
                    Alex Andstén
                  </Typography>
                  {/* <Typography sx={{ fontSize: isSmallScreen ? '1.3em' : '2.5em', fontFamily: "Major Mono Display" }}>
                    Frontendutvecklare
                  </Typography> */}
                </Stack>
              </Grid>
              <Grid item sm={12} md={6}>
                <Stack flexDirection={'row-reverse'}>
                  <Stack flexDirection={'column'} m={4}>
                    <Link to="section1" smooth={true} duration={500}>
                      <Typography sx={{ fontFamily: "Gotu", fontSize: '18px' }}>
                          Experience & skills
                      </Typography>
                    </Link>
                    <Link to="section2" smooth={true} duration={500}>
                      <Typography sx={{ fontFamily: "Gotu", fontSize: '18px' }}>
                        Work & projects
                      </Typography>
                    </Link>
                    <Link to="section3" smooth={true} duration={500}>
                      <Typography sx={{ fontFamily: "Gotu", fontSize: '18px' }}>
                        Contact
                      </Typography>
                    </Link>
                    <a href={CV} target="_blank" rel="noopener noreferrer" 
                      >
                        <Typography sx={{ fontFamily: "Gotu", fontSize: '18px'}}>
                          CV in Swedish
                        </Typography>
                    </a>
                  </Stack>
                </Stack>
              </Grid>
           
          </Grid>
        </Stack> 
       
      <Line />
      <Stack className='para' width={'80%'} height={'100%'} >
        <Stack width={'100%'} height={'100%'} flexDirection={'column'} alignItems={'flex-end'} 
        justifyContent={'flex-end'}
        >
            <Grid container>
              <Grid item md={12} lg={5} gap={3} sx={{ zIndex: 5}}>
                <Stack width={isLargeScreen ? '100%' : '140%'} spacing={1} pt={5}>
                  <Typography sx={{ fontFamily: "Gotu", fontSize: '28px', fontWeight: 'bold' }}>
                    Frontend developer
                  </Typography>
                  <CustomTypography sx={{ fontFamily: "Gotu" }}>
                    I'm a frontend developer based in Stockholm, constantly exploring new projects and expanding my skill set.
                  </CustomTypography>
                  <CustomTypography sx={{ fontFamily: "Gotu" }}>
                    While I specialize in frontend development, particularly with frameworks like React, I'm also diving into backend technologies and database management.
                  </CustomTypography>
                  <CustomTypography sx={{ fontFamily: "Gotu" }}>
                    I’m passionate about creativity and problem-solving, always eager to learn and discover new ways to innovate through code.
                  </CustomTypography>
                  <CustomTypography sx={{ fontFamily: "Gotu" }}>
                    With a background in programming and hands-on experience in various projects, I’m excited to share my journey with you.
                  </CustomTypography>
                  <CustomTypography sx={{ fontFamily: "Gotu" }}>
                    Feel free to explore my work and learn more about what I do!
                  </CustomTypography>
                </Stack>
              </Grid>
              <Grid container item md={12} lg={7} justifyContent={'flex-end'} alignItems={'flex-end'} 
              sx={{ width: isSmallScreen ? '95%' : '100%', height: '100%', marginBottom: '-20px' }}>
              <img src={al3} alt="Alex" style={{ width: '105%', height: 'auto', maxWidth: '1080px', maxHeight: '950px' }} />
            </Grid>
            </Grid>
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
  )
}

export default App
