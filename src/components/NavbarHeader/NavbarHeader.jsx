import React from 'react'
import './NavbarHeader.css'
import CartWidget from '../CartWidget/CartWidget'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarHeader = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Tienda React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">                            
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#products">Productos</Nav.Link>
                            <Nav.Link href="#about">Nosotros</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                            <Nav.Link href="#cart"><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default NavbarHeader
