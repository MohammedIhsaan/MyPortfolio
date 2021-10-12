import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import { Link } from "react-scroll"

export default function Navb(){
    return(

      
<div className ="about">

<Navbar className="" bg="dark" variant ='dark' expand="lg" fixed="top">
  
  
    <Navbar.Brand className="nav-center" href="/">
     <div className="myName"> Mohammed Ihsaanul Haque</div> </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Link to='intro'><Nav.Link  >About</Nav.Link> </Link>
        <Link to='newSkill'><Nav.Link >Skills</Nav.Link> </Link>
        <Link to='project'><Nav.Link >My Work</Nav.Link> </Link>                
        <NavDropdown title="CONNECT" id="basic-nav-dropdown">
          <NavDropdown.Item href="https://www.linkedin.com/in/ihsaan-mohammed-895732222/"><h6 className="text-center"><i class="fab fa-linkedin"></i> LINKDIN </h6></NavDropdown.Item>
          <NavDropdown.Item href="https://github.com/MohammedIhsaan"><h6 className="text-center"> <i class="fab fa-github-square"></i> GIT HUB </h6></NavDropdown.Item>
          <NavDropdown.Item href="https://twitter.com/ihsaanul_haque"><h6 className="text-center"><i class="fab fa-twitter-square"></i> TWITTER </h6></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
 
</Navbar>

      
        </div>
    )
}
