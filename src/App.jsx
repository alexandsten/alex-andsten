import { useState } from 'react'
import { Link, Element } from 'react-scroll';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import ContactLinks from './components/ContactLinks'
import al3 from './img/alex1.jpg'
import { Stack, Typography, GlobalStyles, Grid } from '@mui/material';


function App() {

  return (
    <>
    <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            overflowX: 'hidden'
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
    <Stack width={'100vw'}  justifyContent={'center'} alignItems={'center'} >
      
      <Stack width={'100%'} flexDirection={'row-reverse'} minHeight={'40vh'} sx={{ backgroundColor: 'white'}}>
        
      <Grid container>
        <Grid item sm={12} md={5}>
          <Stack width={'30vw'} mt={10} flexDirection={'row-reverse'}>
            <Stack flexDirection={'column'}>
              <Link to="section1" smooth={true} duration={500}>
                <Typography sx={{ fontFamily: "Gotu" }}>
                    Mina kunskaper
                </Typography>
              </Link>
              <Link to="section2" smooth={true} duration={500}>
                <Typography sx={{ fontFamily: "Gotu" }}>
                  Mina projekt
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={12} md={7}>
          <Stack flexDirection={'column'}>
            <Typography sx={{ fontSize: '3em', fontFamily: "Major Mono Display" }}>
              Alex Andstén
            </Typography>
            <Typography sx={{ fontSize: '3em', fontFamily: "Major Mono Display" }}>
              Frontendutvecklare
            </Typography>
          </Stack>
        </Grid>
      </Grid>

        
        
      </Stack>  
  

        <Stack className='para'>

        {/* <h2>Frontendutvecklare</h2> */}

        <Typography sx={{ fontFamily: "Gotu" }}>
          Kreativ och nyfiken. Alltid öppen för roliga projekt.
        </Typography>

        <Stack width={'100%'} >
            <Grid container>
              <Grid item sm={12} md={6}>
                <Typography sx={{ fontFamily: "Gotu" }}>
                  Jag är entusiastisk över att få möjligheten att tillämpa mina färdigheter och kunskaper
                  på en spännande och innovativ praktikplats. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nostrum delectus, laudantium iusto non excepturi consequuntur repudiandae ut consectetur, asperiores cum quas ducimus incidunt maiores eveniet temporibus quidem deleniti consequatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat odit illum delectus et ut in maxime dignissimos libero hic repudiandae assumenda, numquam eaque iure totam, explicabo velit magnam. Soluta, repellat. lorem
                </Typography>
              </Grid>
              <Grid item sm={12} md={6} sx={{ marginBottom: '-1em'}}>
                  <img src={al3} alt="Alex" style={{width: '540px', height: '425px'}} />
              </Grid>
            </Grid>
        </Stack>
      </Stack>
        
        <Element name="section1">
          <AboutMe />
        </Element>
        
        <Element name="section2">
          <MyProjects />
        </Element>
          
        <Footer /> 
      </Stack>
    </>
  )
}

export default App
