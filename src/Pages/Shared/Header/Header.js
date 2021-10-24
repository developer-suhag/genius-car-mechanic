import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";

const Header = () => {
  const { users, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              {" "}
              <img className="w-50" src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="text-white" as={Link} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/addSerivce">
              Add Service
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/manage">
              Manage Service
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/home#experts">
              Experts
            </Nav.Link>
            {users?.email ? (
              <Button onClick={logOut} variant="text" className="text-white">
                LogOut
              </Button>
            ) : (
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {users?.displayName && (
              <Navbar.Text>
                Signed in as: <a href="#login"> {users.displayName}</a>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
