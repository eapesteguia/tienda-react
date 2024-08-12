import React from 'react'
import './NavbarHeader.css'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import {useState} from 'react';

const NavbarHeader = () => {

    const [categorias, setCategorias] = useState(["electronics", "jewelery", "men's clothing", "women's clothing"])

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">Tienda React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">  
                            {
                                categorias.length > 0 && categorias.map(e => <Nav.Link key={e} as={Link} to={`/categoria/${e}`}>{e}</Nav.Link>)
                            }                          
                            <Nav.Link as={Link} to=""><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default NavbarHeader
