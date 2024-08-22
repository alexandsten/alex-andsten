import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import styled, { keyframes } from 'styled-components';
import pulse from 'react-animations/lib/pulse';
import nostraPic1 from '../img/nostra1.png'
import hitractPic1 from '../img/hitract1.png'
import nobelPic1 from '../img/nobel1.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MyProjects = () => {
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
      <Stack height={'100vh'} width={'100vw'} sx={{ backgroundColor: 'white', overflowX: 'hidden' }}
  justifyContent={'center'} alignItems={'center'}
>
  <h2>Arbete & projekt</h2>

  <Stack width={'75%'} mt={5}>
    <CustomSlider {...settings}>
      
      {/* First Slide */}
      <Stack>
        <Stack height={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}
          sx={{ border: '3px solid black', borderRadius: '15px' }}
        >
          <Grid container sx={{ height: '100%'}}>
            <Grid item md={6} sm={12} sx={{
              backgroundImage: `url(${nostraPic1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
            }}>
              {/* The left side with the background image */}
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack height={'100%'} justifyContent={'space-between'} alignItems={'center'} p={3}
                sx={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}
              >
                <Typography>Predictions startup for MMA</Typography>
                <Typography>Nostradamage</Typography>
                <a href="https://nostradamage.netlify.app/" target="_blank" rel="noopener noreferrer">Besök webbplats</a>
                <PulseDiv>
                  <Typography>Läs mer</Typography>
                </PulseDiv>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      {/* Second Slide */}
      <Stack>
        <Stack height={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}
          sx={{ border: '3px solid black', borderRadius: '15px' }}
        >
          <Grid container sx={{ height: '100%'}}>
            <Grid item md={6} sm={12} sx={{
              backgroundImage: `url(${nobelPic1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
            }}>
              {/* The left side with the background image */}
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack height={'100%'} justifyContent={'space-between'} alignItems={'center'} p={3}
                sx={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}
              >
                <Typography>Predictions startup for MMA</Typography>
                <Typography>Nostradamage</Typography>
                <a href="https://nostradamage.netlify.app/" target="_blank" rel="noopener noreferrer">Besök webbplats</a>
                <PulseDiv>
                  <Typography>Läs mer</Typography>
                </PulseDiv>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      {/* Third Slide */}
      <Stack>
        <Stack height={'75vh'} justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'} gap={3}
          sx={{ border: '3px solid black', borderRadius: '15px' }}
        >
          <Grid container sx={{ height: '100%' }}>
            <Grid item md={6} sm={12} sx={{
              backgroundImage: `url(${hitractPic1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderTopLeftRadius: '15px',
              borderBottomLeftRadius: '15px',
              borderRight: 'solid black 1px',
            }}>
              {/* The left side with the background image */}
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack height={'100%'} justifyContent={'space-between'} alignItems={'center'} p={3}
                sx={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}
              >
                <Typography>Predictions startup for MMA</Typography>
                <Typography>Nostradamage</Typography>
                <a href="https://nostradamage.netlify.app/" target="_blank" rel="noopener noreferrer">Besök webbplats</a>
                <PulseDiv>
                  <Typography>Läs mer</Typography>
                </PulseDiv>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>


    </CustomSlider>
  </Stack>
</Stack>

    </>
  )
}

export default MyProjects
