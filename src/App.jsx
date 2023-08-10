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
      <div>
        <Link to="section1" smooth={true} duration={500}>Go to Section 1</Link>
        <Link to="section2" smooth={true} duration={500}>Go to Section 2</Link>
      </div>
  
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Element name="section1">
        <AboutMe />
      </Element>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Element name="section2">
        <MyProjects />
      </Element>
        <MenuNav />
      <Footer />
    </>
  )
}

export default App
