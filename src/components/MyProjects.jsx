import { Grid, Stack, Typography, styled as muiStyled } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import styled, { keyframes } from 'styled-components';
import pulse from 'react-animations/lib/pulse';
import nostraPic1 from '../img/nostraPic2.png'
import hitractPic1 from '../img/hitract1.png'
import nobelPic1 from '../img/nobelPic2.png'
import whiteBg from '../img/whiteBg2.jpg';
import paperBgPic1 from '../img/paperbackground1.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from '@mui/material';
import MainMenu from './MainMenu';
import alex1 from '../img/alex1.png'

const MyProjects = () => {

  const Text = muiStyled(Typography)({
    fontFamily: 'Gotu',
    color: 'black',
    fontSize: '0.9em'
  });

    const CustomTypography = muiStyled(Typography)(({ theme }) => ({
      fontFamily: 'Gotu', 
      color: 'white', 
      fontSize: '14px',
      '&::first-letter': {
        fontSize: isSmallScreen ? '24px' : '30px',
        fontWeight: 'bold',
      },
    }));

  const TextTitle = muiStyled(Typography)({
    fontFamily: 'Gotu',
    color: 'black',
    fontSize: '1.3em',
    fontWeight: 'bold',
    color: 'white'
  });

  const TextHeader = muiStyled(Typography)({
    fontFamily: 'Gotu',
    color: 'white',
  });

  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  const isMiniScreen = useMediaQuery('(max-width:600px)');

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const pulseAnimation = keyframes`${pulse}`;

    const PulseDiv = styled.div`
      animation: 2s ${pulseAnimation} infinite;
    `;

    const CustomSlider = styled(Slider)`
        .slick-list {
          overflow: hidden;  
        }
      .slick-prev:before {
        z-index: 1;
        color: black; 
      }
      .slick-next:before {
        color: black; 
      }
    `;
  return (
    <>
      <Stack
            sx={{
              background: 'radial-gradient(circle, #012c2c 0%, #000000 60%)',
              minHeight: '100vh',
            }}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Stack justifyContent={'flex-start'} alignItems={'center'}>
              <h1>IT-tekniker med fokus på Microsoft 365</h1>
            </Stack>
             <MainMenu />
            <Stack width={'66%'} spacing={1} pt={5}  justifyContent={'flex-start'} alignItems={'flex-start'}>
              {/* <Typography
                sx={{ fontFamily: 'Gotu', fontSize: '28px', fontWeight: 'bold', color: 'white' }}
              >
                Frontend developer
              </Typography> */}
              {/* <FadeDiv> */}
                <div>
                    <div className="profile-container">
                      <img src={alex1} width="30%" />
                      <div>
                        <h2>Labbar</h2>
                        <p>
                         Jag bygger och dokumenterar egna labbmiljöer i Microsoft 365 för att utveckla praktisk kompetens inom Entra ID, Conditional Access, Intune och säkerhetskonfiguration.
                        
                      </p>
                      <p>
                        Mitt mål är att arbeta praktiskt med användarhantering, felsökning och
                        M365-administration i en organisation där jag kan fortsätta utvecklas.
                      </p>
                      </div>
                     
                    </div>

                  

                </div>
            </Stack>
            <Stack width={'80%'} height={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
              <Grid container width={'100%'}>
                <Grid item sm={12} md={4} width={'100%'}>
                  <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
                    
                  
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            
          </Stack>

    </>
  )
}

export default MyProjects
