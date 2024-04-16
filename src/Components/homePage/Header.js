import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import img from "../homePage/assets/logo.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ height: "90px" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={img}
            width="120"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title="Nos Formations" id="basic-nav-dropdown">
            <NavDropdown.Item href="#Formation1">Formation 1</NavDropdown.Item>
            <NavDropdown.Item href="#Formation2">Formation 2</NavDropdown.Item>
            <NavDropdown.Item href="#Formation3">Formation 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#Autres">
              Autres Formations
            </NavDropdown.Item>
          </NavDropdown>
          <Form className="d-flex" style={{ marginLeft: "900px" }}>
            <Link to="/signup">
              <Button
                variant="outline-secondary"
                style={{
                  height: "40px",
                  width: "80px",
                  textAlign: "center",
                  alignItems: "center",
                  marginRight: "5px",
                }}
              >
                <p>Sign up</p>
              </Button>
            </Link>
            <Link to="/login">
              <Button
                style={{
                  height: "40px",
                  width: "auto",
                  textAlign: "center",
                  alignItems: "center",
                  backgroundColor: "#48ADCB",
                  border: "0",
                }}
              >
                <p>Login</p>
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
