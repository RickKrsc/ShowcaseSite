import { NavDropdown, Nav, Navbar, Container, Image, NavbarBrand, NavbarToggle } from 'react-bootstrap';
//import logoImage from './Assets/piza.jpg';
import './NavbarComponent.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarComponent() {
  const red = { backgroundColor: '#AF1E1E', borderBottom: '1px solid black' };
  const logo = { color: '#F7F7F7', fontFamily: 'Impact, sans-serif', fontSize: '2.5rem', marginLeft: '12rem' };
  const fontNormale = { color: '#F7F7F7', fontFamily: 'Impact, sans-serif' };
  const navOrder = { fontSize: '1.2rem', marginLeft: '1rem' };
  const textColor = { color: '#F7F7F7', marginLeft: '1rem', borderRadius: '10000px' }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar fixed='top' expand="xl" className="mx-auto" style={red}>
      <NavbarToggle />
      <Navbar.Collapse id="basic-navbar-nav" style={navOrder} className='exp'>
        <Nav className="me-auto" style={fontNormale} id='listafull'>
          <Nav.Link onClick={() => scrollToSection('home')} style={textColor}>Chi siamo</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('menu')} style={textColor}>Menù</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('reviews')} style={textColor}>Dicono di noi</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('contatti')} style={textColor}>Contatti</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Container className='' >
        <NavbarBrand href="#homepage" className='align-items-center' style={logo}>  Lorem Ipsum </NavbarBrand>
      </Container>
    </Navbar>

  );
}

export default NavbarComponent;