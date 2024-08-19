import { Stack, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import styled, { keyframes } from 'styled-components';
import pulse from 'react-animations/lib/pulse';
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
  return (
    <>
      <Stack height={'100vh'} width={'99vw'} sx={{ backgroundColor: 'pink'}}
        justifyContent={'center'} alignItems={'center'}
      >

        <h2>Mina projekt</h2>

        <Stack width={'75%'} mt={5}>
         <Slider {...settings} >
          <Stack>
            <Stack height={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}>
              <a href="https://storied-sundae-b1d64e.netlify.app/" target='_blank'>Nostradamage</a> 
              <Stack flexDirection={'column'}>
                <Typography >Predictions startup for MMA</Typography> 
               <PulseDiv>
                <Typography >Läs mer</Typography> 
               </PulseDiv>
              </Stack>
            </Stack>
            
          </Stack>
          <Stack>
            <Stack height={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}>
              <a href="https://dapper-longma-6212ba.netlify.app/" target='_blank'>Nobel Light Week</a>
              <Stack flexDirection={'column'}>
                <Typography >Predictions startup for MMA</Typography> 
               <PulseDiv>
                <Typography >Läs mer</Typography> 
               </PulseDiv>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Stack height={'75vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} gap={3}>
              <a href="https://dapper-longma-6212ba.netlify.app/" target='_blank'>hitRact</a>
              <Stack flexDirection={'column'}>
                <Typography >Predictions startup for MMA</Typography> 
               <PulseDiv>
                <Typography >Läs mer</Typography> 
               </PulseDiv>
              </Stack>
              
            </Stack>
          </Stack>
        </Slider> 
        </Stack>
        
      </Stack>
    </>
  )
}

export default MyProjects
