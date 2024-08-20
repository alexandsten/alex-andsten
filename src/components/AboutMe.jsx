import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import pulse from 'react-animations/lib/pulse';
import styled, { keyframes } from 'styled-components';

const AboutMe = () => {

  const pulseAnimation = keyframes`${pulse}`;

  const PulseDiv = styled.div`
    animation: 2s ${pulseAnimation} infinite;
  `;
  return (
   
      <Stack id='aboutMe'  width={'100vw'} sx={{ background: 'radial-gradient(circle, #012c2c 0%, #000000 60%)', minHeight: '100vh'
      }}
      justifyContent={'center'} alignItems={'center'} pt={5}
      >
        
        <Stack justifyContent={'flex-start'} alignItems={'center'}>
            <h3>Erfarenhet & kunskaper</h3>
        </Stack>
        <Stack width={'80%'} height={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
        <Grid container>
          <Grid item sm={12} md={6}>
            
              <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
                <h3>Kunskaper</h3>
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  TypeScript
                </Typography>
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  JavaScript
                </Typography>
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  React
                </Typography>
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  React Native
                </Typography>
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  HTML
                </Typography>
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  CSS
                </Typography>
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  Node.js 
                </Typography>
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  Firebase
                </Typography>
              </Stack>
             
            
          </Grid>
          <Grid item sm={12} md={6}>
             <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
                <h3>Erfarenhet</h3>

                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  Nostra / Nostradamage. 2024 - pågående
                </Typography>

                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  Nobel Light Week mobilapplikation. 2024 - pågående
                </Typography>

                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  hitRact internship. 2023 - 2024
                </Typography>

                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  Frontendutvecklare, JENSEN yrkeshögskola. 2022 - 2024
                </Typography>
              
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  Interaktiva medier och webbteknologier, Linnéuniversitetet. 2020-2021
                </Typography>
              
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                3-årig IT/media gymnasieutbildning, John Bauer. 2008-2011
                </Typography>
            
              </Stack>
          </Grid>
        </Grid>
       </Stack>
      </Stack>
    
  )
}

export default AboutMe
