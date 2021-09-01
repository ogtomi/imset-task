import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";

const BottomBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
          <div>
            <Nav.Link className="navbar-text" href="#">
              O nas
            </Nav.Link>
            <Nav.Link className="navbar-text" href="#">
              Kontakt
            </Nav.Link>
            <Nav.Link className="navbar-text" href="#">
              Kariera
            </Nav.Link>
            <Nav.Link className="navbar-text" href="#">
              Dla mediów
            </Nav.Link>
          </div>
          <div style={{ justifyContent: "right" }}>
            <div className="static-text">Infolinia sprzedażowa</div>
            <div className="numbers">601 601 601</div>
          </div>
          <div style={{ justifyContent: "right" }}>
            <div className="static-text">Centrum obsługi klienta</div>
            <div className="numbers">800 080 800</div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default BottomBar;
