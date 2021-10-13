import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Header = () => {
    const { users } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="w-50" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white" as={Link} to="/home#home">
                            Home
                        </Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/home#services">
                            Services
                        </Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/home#experts">
                            Experts
                        </Nav.Link>
                        {users?.email ? (
                            <Button>LogOut</Button>
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
