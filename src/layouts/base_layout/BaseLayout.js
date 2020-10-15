import React from "react";

import './BaseLayout.css'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function BaseLayout(props) {
    return (
      <div className="layout">
          <Navbar expand="lg" variant="dark" bg="dark">
              <Navbar.Brand href="/">iRyb.<span className="accent-light">TECH</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="/">About</Nav.Link>
                      <Nav.Link href="/projects">Projects</Nav.Link>
                      <Nav.Link href="/contacts">Contacts</Nav.Link>
                  </Nav>
                  <Nav>
                      <Nav.Link href="https://github.com/ivrybachenko/iryb">
                          <span className="accent-light">Github</span>
                      </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          {props.content}
      </div>
    );
}
