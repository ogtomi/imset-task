import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";

const linkGit = "https://github.com/ogtomi"
const linkLinkedIn = "https://www.linkedin.com/in/tomasz-lewandowski-ba3ba91bb/"

const HeadBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavDropdown id="nav-dropdown-dark-example" menuVariant="dark">
              <NavDropdown.Item href={linkGit}>Bardzo ciekawy link</NavDropdown.Item>
              <NavDropdown.Item href={linkLinkedIn}>Drugi ciekawy link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="static-text">
              Centrum obsługi klienta
          </div>
          <Nav.Link className="numbers" href="#">830 808 300</Nav.Link>
          <Nav.Link className="navbar-text" href="#">Szukaj</Nav.Link>
          <Nav.Link className="navbar-text" href="#">Strefa abonenta</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default HeadBar;
