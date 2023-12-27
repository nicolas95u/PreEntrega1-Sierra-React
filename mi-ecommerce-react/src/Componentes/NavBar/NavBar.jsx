import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => { 
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Mi Tienda sin nombre</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#storage">Almacenamiento</Nav.Link>
                <Nav.Link href="#cables">Cables y Adaptadores</Nav.Link>
                <Nav.Link href="#cooling">Refrigeración</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
