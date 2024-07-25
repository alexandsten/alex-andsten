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
   
      <Stack id='aboutMe' className='para'  width={'99vw'}  height={'75vh'} sx={{ backgroundColor: 'teal'}}
        justifyContent={'center'} alignItems={'center'}
      >

        <PulseDiv>
          <h2>Utbildning och kunskaper</h2>
        </PulseDiv>

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
    
  )
}

export default AboutMe
