import { Stack, Typography } from '@mui/material'
import React from 'react'
import pulse from 'react-animations/lib/pulse';
import styled, { keyframes } from 'styled-components';

const AboutMe = () => {

  const pulseAnimation = keyframes`${pulse}`;

  const PulseDiv = styled.div`
    animation: 2s ${pulseAnimation} infinite;
  `;
  return (
   
      <Stack id='aboutMe'  width={'99vw'}  height={'100vh'} sx={{ backgroundColor: 'teal'}}
      justifyContent={'center'} pt={5}
      >
        <Stack justifyContent={'flex-start'} alignItems={'center'}>
          <PulseDiv>
            <h2>Utbildning och kunskaper</h2>
          </PulseDiv>
        </Stack>

        <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
          <Stack justifyContent={'center'} alignItems={'center'} p={5}>
            <h2>Kunskaper</h2>

            <Typography>
              Frontendutvecklare, JENSEN yrkeshögskola
            </Typography>

            <Typography>
              2022-pågående
            - Javascript, HTML, CSS, ramverk, react, react native, jsx, databashantering,
            arbete med API’er, grundläggande UX, testning, agilt projektmetodik
            </Typography>
          
        
            <Typography>
              Interaktiva medier och webbteknologier, Linnéuniversitetet
            </Typography>
          
            <Typography>
              2020-2021
              - Javascript, HTML, CSS, PHP, lärande av klient - server - databas,
              phpMyAdmin, SQL, MySQL
            </Typography>
            
            <Typography>
            3-årig IT/media gymnasieutbildning, John Bauer
            </Typography>
        
            <Typography>
              2008-2011
            -HTML, CSS, Adobe paketet, bild retuschering
            </Typography>

            <Typography>
              Mina färdigheter - javascript osv
            </Typography>
          </Stack>
          <Stack justifyContent={'center'} alignItems={'center'} p={5}>
            <h2>Utbildning / erfarenhet</h2>

            <Typography>
              Frontendutvecklare, JENSEN yrkeshögskola
            </Typography>

            <Typography>
              2022-pågående
            - Javascript, HTML, CSS, ramverk, react, react native, jsx, databashantering,
            arbete med API’er, grundläggande UX, testning, agilt projektmetodik
            </Typography>
          
        
            <Typography>
              Interaktiva medier och webbteknologier, Linnéuniversitetet
            </Typography>
          
            <Typography>
              2020-2021
              - Javascript, HTML, CSS, PHP, lärande av klient - server - databas,
              phpMyAdmin, SQL, MySQL
            </Typography>
            
            <Typography>
            3-årig IT/media gymnasieutbildning, John Bauer
            </Typography>
        
            <Typography>
              2008-2011
            -HTML, CSS, Adobe paketet, bild retuschering
            </Typography>

            <Typography>
              Mina färdigheter - javascript osv
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    
  )
}

export default AboutMe
