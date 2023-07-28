import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import ContactLinks from './components/ContactLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <h1>Alex Portfolio</h1>
      <div>
        <AboutMe />
        <MyProjects />
        <ContactLinks />
      </div>
      <Footer />
    </>
  )
}

export default App
