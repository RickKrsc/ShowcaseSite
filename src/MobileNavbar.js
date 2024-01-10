import React, { useState } from 'react';
import { NavDropdown, Nav, Navbar, Container, Image, NavbarBrand, NavbarToggle } from 'react-bootstrap';
import './NavbarComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MobileNavbarComponent() {
    // Stili specifici per il mobile
    const mobileStyles = {
        // Cambia l'opacità secondo le tue preferenze
        // Aggiungi uno spazio superiore per allineare il menu rispetto allo sfondo
        color: '#000000', // Cambia il colore del testo del link se necessario
    };

    const navOrder = { fontSize: '1.2rem', marginLeft: '1rem' };

    const textColor = { color: '#F7F7F7', marginLeft: '1rem', borderRadius: '10000px' }

    const [expanded, setExpanded] = useState(false);

    const groundNav = { backgroundColor: '#AF1E1E' }

    const logo = {fontFamily: 'Impact, sans-serif', marginBottom: '2rem'};

    const mobileToggleStyle = {
        border: 'none',  // Rimuovi il contorno del pulsante del menù  // Aggiungi margine sopra il pulsante per separarlo dal logo
      };

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar fixed='top' expand="lg" expanded={expanded} style={groundNav}>
            <Navbar.Brand className="mx-auto" href="#home" id='logoMobile' style={logo}>Te prendo a pizze</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} style={mobileToggleStyle} />
            <Navbar.Collapse id="basic-navbar-nav">
            <ul>
                <li className='liMobile'><a href='#'><p>Chi siamo</p></a></li>
                <li className='liMobile'><a href='#'><p> Contatti </p></a></li>
                <li className='liMobile'><a href='#'><p>Menù</p></a></li>
                <li className='liMobile'><a href='#'><p>Dicono di noi</p></a></li>
            </ul>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MobileNavbarComponent;
