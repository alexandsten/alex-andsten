import { useState } from 'react'
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
      <h1>Alex Andstén Portfolio</h1>
      <div>
        <AboutMe />
        <MyProjects />
        <MenuNav />
        <ContactLinks />
      </div>
      <Footer />
    </>
  )
}

export default App
