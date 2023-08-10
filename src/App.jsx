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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      {/* Smooth scrolling links */}
      <div id='mainNav'>
        <Link to="section1" smooth={true} duration={500}>Mina kunskaper</Link>
        <Link to="section2" smooth={true} duration={500}>Mina projekt</Link>
      </div>
      <div className='para'>
        <h2>Söker nu praktik</h2>
      <p>Jag är en student på Jensen Yrkeshögskola som studerar frontendutveckling. Jag söker
    efter en praktikplats som frontendutvecklare.
    Under min utbildning har jag lärt mig att skapa användarvänliga och estetiskt tilltalande
    gränssnitt för webbplatser och webbapplikationer. Jag har lärt mig att använda
    frontendteknologier som HTML, CSS, JavaScript och ramverk som React för att skapa
    dynamiska och responsiva webbapplikationer.
    </p>
    <p>Jag är entusiastisk över att få möjligheten att tillämpa mina färdigheter och kunskaper
    på en spännande och innovativ praktikplats. Jag är också beredd att lära mig nya
    teknologier och arbetssätt för att fortsätta utvecklas som frontendutvecklare.
    Jag tror att min passion för teknologi och mitt engagemang för att skapa
    användarvänliga gränssnitt och webbapplikationer skulle göra mig till en värdefull
    tillgång för teamet. Jag ser fram emot att diskutera hur jag kan bidra till företaget under
    min praktikperiod.</p>
    

      </div>
  
      
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
