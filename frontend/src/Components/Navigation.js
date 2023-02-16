import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useSearchParams } from "react-router-dom";
import "./Navigation.css";
import { logout } from "../redux/Action/Authaction";
const Navigation = () => {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.authreducer.client);
  console.log(client);
  return (
    <div className="navbar">
    <h1 className="title-up">TechnoShop</h1>
     <div className="nav"> 
            {client ?
                <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
             <Nav className="me-auto">
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/product" >Product</Nav.Link>
            <Nav.Link as={Link} to="/addproduct" >Add</Nav.Link>
            <Nav.Link  as={Link} to="/" onClick={() => dispatch(logout())}>Logout</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
        : <Navbar bg="dark" variant="dark">
        <Container>
         <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
        <Nav.Link as={Link} to="/login" >Login</Nav.Link>
        <Nav.Link as={Link} to="/register" >Register</Nav.Link>
        </Nav>
        </Container>
      </Navbar>}
      </div>     
      </div>   
          
  );
};

export default Navigation;