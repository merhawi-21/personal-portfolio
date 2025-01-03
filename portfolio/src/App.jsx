
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Intro from './components/Intro/Intro'
import Skills from './components/skills/Skills'
import Works from './components/works/Works'
import ContactMe from './components/contact/ContactMe'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Intro/>
    <Skills/>
    <Works/>
    <ContactMe/>
    <Footer/>
    </>
  )
}

export default App
