import { FaPlaneDeparture } from "react-icons/fa";
import { Nav} from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import styled from "styled-components";

const NavStyle = styled.nav`
  &:hover{
    border-bottom: 3px solid white;
    color: white;
  }
  `


function Navigation() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <FaPlaneDeparture color="white" fontSize="30px"/>
    <Container>
    <Navbar.Brand href="#home">Biggs Airline</Navbar.Brand>
    <Nav className="me-auto">
    <LinkContainer to="/">
      <Nav.Link> <NavStyle>Home</NavStyle></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Passenger">
      <Nav.Link><NavStyle>Passengers</NavStyle></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Flights">
      <Nav.Link><NavStyle>Flights</NavStyle></Nav.Link>
      </LinkContainer>
    </Nav>
    </Container>
  </Navbar>
  </>
  );
}

export default Navigation;
