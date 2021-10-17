import { useState } from "react"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import { Link } from "react-scroll"

export default function Navb(){

  const [expanded, setExpanded] = useState(false);

let openToggle =()=>{
  console.log("heloo")
  setExpanded(true)
}

let closeToggle=()=>{
  console.log("bye")
  setExpanded(false)

}
    return(

      
<div  className ="about">

<Navbar expanded={expanded} className="" bg="dark" variant ='dark' expand="lg" fixed="top">
  
  
     <Navbar.Brand   className="nav-center">
     <div  className="myName"> Mohammed Ihsaanul Haque</div> </Navbar.Brand>
    <Navbar.Collapse    id="basic-navbar-nav">
      <Nav    className="me-auto">
      <Link to='intro'> <Nav.Link onClick={()=>closeToggle() } >Home</Nav.Link></Link>
        <Link to='intro'><Nav.Link onClick={()=>closeToggle()} >About</Nav.Link> </Link>
        <Link to='newSkill'><Nav.Link onClick={()=>closeToggle()}>Skills</Nav.Link> </Link>
        <Link to='project'><Nav.Link onClick={()=>closeToggle()}>My Work</Nav.Link> </Link>                
        <NavDropdown title="CONNECT" id="basic-nav-dropdown">
          <NavDropdown.Item  href="https://www.linkedin.com/in/ihsaan-mohammed-895732222/"><h6 className="text-center"><i class="fab fa-linkedin"></i> LINKDIN </h6></NavDropdown.Item>
          <NavDropdown.Item href="https://github.com/MohammedIhsaan"><h6 className="text-center"> <i class="fab fa-github-square"></i> GIT HUB </h6></NavDropdown.Item>
          <NavDropdown.Item href="https://twitter.com/ihsaanul_haque"><h6 className="text-center"><i class="fab fa-twitter-square"></i> TWITTER </h6></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  
    
    <Navbar.Toggle onClick={()=> setExpanded(expanded?false : "expanded")} aria-controls="basic-navbar-nav" />
    
 
</Navbar>

      
        </div>
    )
}
