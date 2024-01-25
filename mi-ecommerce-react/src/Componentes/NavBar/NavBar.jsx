import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Navbar.Brand as={NavLink} to="/" className="mr-5">
        <h1 className="brand-title">Mi Tienda Sin Nombre</h1>
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
