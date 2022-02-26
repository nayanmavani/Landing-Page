import React from 'react';
import { Button, Nav, Navbar, Row } from 'react-bootstrap';

function Header() {
  return (
      <Row className='w-100'>
        <Navbar>
          <Navbar.Brand href="#home">WebTech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
              <Button variant="outline-success">Search</Button>
        </Navbar>
      </Row>
  );
}

export default Header;
