import React from 'react'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkill'
import MyProjects from './components/MyProject'
import NewNavbar from './components/NavBar'

export default function App (){
    return(
        <div > 
            <NewNavbar/>
            <AboutMe/>
            <MySkills/>
            <MyProjects/> 
        </div>
    )
}