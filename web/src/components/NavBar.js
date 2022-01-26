import React from 'react';
import {Navbar,Container,Nav,} from 'react-bootstrap'
import logo from '../images/logo.png'

const NavBar = () => {
  return <div>
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} height='25px' width='25px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#sourceCode"><a href='https://github.com/Periyot/Random-Color-Generator'>Source Code</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>;
};

export default NavBar;
