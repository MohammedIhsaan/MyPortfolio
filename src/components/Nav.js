import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
export default function Navb(){
    return(
      <div className="p-5">

<Navbar bg="dark" variant ='dark' expand="lg" fixed="top">
  <Container>
  <Row>
    <Col xs={12} md={8}><Navbar.Brand href="#home">Mohammed Ihsaanul Haque</Navbar.Brand></Col>
    <Col xs={6} md={4}><Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Skills</Nav.Link>
        <Nav.Link href="#link">Pojects</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse></Col>
  </Row>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
  </Container>
</Navbar>

      </div>
    )
}
