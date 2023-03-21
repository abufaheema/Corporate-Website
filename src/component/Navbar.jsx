import { Container, Nav, Navbar } from "react-bootstrap";
import {} from 'react-router-hash-link'


function AppHeader() {
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#home" style={{color:'#f64b4b'}}>Corporate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
