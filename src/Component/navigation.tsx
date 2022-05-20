import { FaPlaneDeparture } from "react-icons/fa";
import { Nav} from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


function Navigation() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <FaPlaneDeparture color="white" fontSize="30px"/>
    <Container>
    <Navbar.Brand href="#home">Biggs Airline</Navbar.Brand>
    <Nav className="me-auto">
    <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Passenger">
      <Nav.Link>Passengers</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Flights">
      <Nav.Link>Flights</Nav.Link>
      </LinkContainer>
    </Nav>
    </Container>
  </Navbar>
  </>
  );
}

export default Navigation;
