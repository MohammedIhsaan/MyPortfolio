import React from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Certificate from './components/Certificate'

export default function App (){
    return(
        <div className="conatainer-fluid">
            <Navbar/>
            <About/>
            <Skills/>
            <Certificate/>
            <Projects/>
            <Contact/>            
        </div>
    )
}