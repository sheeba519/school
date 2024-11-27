import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const SchoolNavbar = () => {
  const handleLoginClick = (role) => {
    console.log(`Logging in as ${role}`);
  };

  return (
    <>
      <Navbar bg="light" expand="sm" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="logo.png"
              alt="Vidhya School Logo"
              width="40" // Set desired width
              height="40" // Set desired height
              className="d-inline-block align-top h-50 w-50"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav "/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"><h6>Home</h6></Nav.Link>
              {/* <Nav.Link href="/about"><h6>About</h6></Nav.Link> */}
              <Nav.Link href="/contact"><h6>Contact</h6></Nav.Link>
            </Nav>
            <NavDropdown title="Login" className='btn btn-outline-primary me-2' id='basic-nav-dropdown'>
            <NavDropdown.Item onClick={() => handleLoginClick('Principal')} href="/login">Admin</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLoginClick('Student')} href="/login">Student</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLoginClick('Teacher')} href="/login">Teacher</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLoginClick('Staff')} href="/login">Staff</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLoginClick('Principal')} href="/login">Acc Staff</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLoginClick('Principal')} href="/login">Parent</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLoginClick('Principal')} href="/login">Libraray</NavDropdown.Item>
             
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br />
      <br />
      <br />
    </>
  );
};

export default SchoolNavbar;
