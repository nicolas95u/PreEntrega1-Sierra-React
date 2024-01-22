import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        <h1>Mi Tienda Sin Nombre </h1>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/categoria/1">
          Almacenamiento
        </Nav.Link>
        <Nav.Link as={NavLink} to="/categoria/2">
          Cables y adaptadores
        </Nav.Link>
        <Nav.Link as={NavLink} to="/categoria/3">
          Refrigeración
        </Nav.Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
