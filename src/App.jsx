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
import { Stack, Typography, GlobalStyles } from '@mui/material';


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
    <Stack width={'100%'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'white'}}>

    <Stack p={5} height={'20vh'}>
      <Typography sx={{ fontSize: '3em', fontFamily: "Major Mono Display" }}>
        Alex Andstén - Frontendutvecklare
      </Typography>
    </Stack>
     
        <Stack width={'50vw'} p={5}>
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
      
        

        <Stack className='para'>

        <h2>Frontendutvecklare</h2>

        <Typography sx={{ fontFamily: "Gotu" }}>
          Kreativ och nyfiken. Alltid öppen för roliga projekt.
        </Typography>

        <Typography sx={{ fontFamily: "Gotu" }}>
          Jag är entusiastisk över att få möjligheten att tillämpa mina färdigheter och kunskaper
          på en spännande och innovativ praktikplats. Jag är också beredd att lära mig nya
          teknologier och arbetssätt för att fortsätta utvecklas som frontendutvecklare.
          Jag tror att min passion för teknologi och mitt engagemang för att skapa
          användarvänliga gränssnitt och webbapplikationer skulle göra mig till en värdefull
          tillgång för teamet. Jag ser fram emot att diskutera hur jag kan bidra till företaget under
          min praktikperiod.
        </Typography>

      <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: '100%'}}>
        <img src={al3} alt="Alex" style={{width: '50%', height: '50%'}} />
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
