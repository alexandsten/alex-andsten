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
   
      <Stack id='aboutMe'  minWidth={'100vw'} sx={{ background: 'radial-gradient(circle, #012c2c 0%, #000000 60%)', minHeight: '100vh'
      }}
      justifyContent={'flex-start'} alignItems={'center'} 
      >
        
        <Stack justifyContent={'flex-start'} alignItems={'center'}>
            <h3>Experience & skills</h3>
        </Stack>
        <Stack width={'80%'} height={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
        <Grid container>
          <Grid item sm={12} md={4}>
              <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
                <h3>Skills</h3>
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
          <Grid item sm={12} md={4}>
             <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
                <h3>Experience</h3>

                <Stack>
                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  Nostra / Nostradamage. 2024 - ongoing
                </Typography>
                <Stack width={'80%'}>
                  <Typography sx={{ fontFamily: "Gotu", color: 'white', fontSize: '14px'}}>
                    - React, JavaScript, MUI, Firebase, Realtime Database
                  </Typography>
                </Stack>
                </Stack>
                
                <Stack>
                  <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                    Nobel Week Lights mobilapplikation. 2024 - ongoing
                  </Typography>
                  <Stack width={'80%'}>
                    <Typography sx={{ fontFamily: "Gotu", color: 'white', fontSize: '14'}}>
                      - React Native, Wordpress Database, Mapbox
                    </Typography>
                  </Stack>
                </Stack>

                <Stack>
                  <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                    hitRact internship. 2023 - 2024
                  </Typography>
                  <Stack width={'80%'}>
                    <Typography sx={{ fontFamily: "Gotu", color: 'white', fontSize: '14px'}}>
                     - React, TypeScript, MUI
                    </Typography>
                  </Stack>
                </Stack>

              </Stack>
          </Grid>
          <Grid item sm={12} md={4}>
             <Stack justifyContent={'flex-start'} alignItems={'flex-start'} p={5} gap={3}>
                <h3>Education</h3>

                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  Frontend Developer, JENSEN Vocational School. 2022 - 2024
                </Typography>

                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  Interactive Media and Web Technologies, Linnaeus University. 2020-2021
                </Typography>

                <Typography sx={{ fontFamily: "Gotu", color: 'white' }}>
                  3-year IT/Media High School Education, John Bauer. 2008-2011
                </Typography>

              </Stack>
          </Grid>
        </Grid>
       </Stack>
      </Stack>
    
  )
}

export default AboutMe
