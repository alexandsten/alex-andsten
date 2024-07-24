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
import MenuNav from './components/Links'
import al3 from './img/alex1.jpg'
import { Stack, Typography } from '@mui/material';

function App() {

  return (
    <>
    
    <header>
      <Stack id='mainNav'>
        <Link to="section1" smooth={true} duration={500}>Mina kunskaper</Link>
        <Link to="section2" smooth={true} duration={500}>Mina projekt</Link>
      </Stack>
    </header>
      

      <Stack className='para'>

      <h2>Frontendutvecklare</h2>

      <Typography>
        Kreativ och nyfiken. Alltid öppen för roliga projekt.
      </Typography>

      <Typography>
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
        <br />
      </Element>
        <MenuNav />
      <Footer />
    </>
  )
}

export default App
