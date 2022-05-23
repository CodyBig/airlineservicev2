import React from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import APIService from "../services/apiServices";
import Passengers from "../Model/passengers";
import PassengerColumn from "./passengercolumn";
import styled from "styled-components";
import passengers, { passenger_dto } from "../Model/passengers";

const ButtonStyle = styled.button`
  appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  font-weight: 400;
  line-height: 1;
  padding: .7em 1.8em;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

 
  color: black;
  box-shadow: 70px 0 40px 40px white inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  
  &:hover{
    color: black;
  outline: 0;
  box-shadow: 0 0 10px 0 black inset, 0 0 10px 4px black;
  }
  &:focus{
    color: black;
  outline: 0;
  }
  
  &:active{
    color: black;
    outline: 0;
  box-shadow: 0 0 10px 0 black inset, 0 0 10px 4px black;
 
  transform: translateY(4px);
  }`

type passengerProps = {};

type passengerState = {
  show: boolean;
  addShow: boolean;
  id: number;
  name: string;
  email: string;
  job: string;
  passengers: Passengers[];
};

class Passenger extends React.Component<passengerProps, passengerState> {
  constructor(props: passengerProps) {
    super(props);
    this.state = {
      show: false,
      addShow: false,
      id: 0,
      name: "",
      email: "",
      job: "",
      passengers: [],
    };
  }
  componentDidMount() {
    APIService.getPassengers()
      .then((response) => {
        console.log(response);
        this.setState({
          passengers: response.data,
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }
 
  handleClose = () => {
    this.setState({ show: false, addShow: false });
    window.location.reload();
  };


  handleShow = (passenger: Passengers) => {
    this.setState({
      show: !false,
      id: passenger.id,
      name: passenger.name,
      email: passenger.email,
      job: passenger.job,
    });
  };
  handleAddShow = () => {
    this.setState({ addShow: !false });
  };
  handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };
  handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };
  handleJob = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ job: event.target.value });
  };

  handleOnSubmit = (e: any) => {
    e.preventDefault();
    let passEdit: Passengers = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      job: this.state.job,
    };
    console.log(passEdit);
    APIService.editPassenger(passEdit);
    this.handleClose();
  };

  handleAddSubmit = (e: any) => {
    e.preventDefault();
    const passengerAdd: passenger_dto = {
      name: this.state.name,
      email: this.state.email,
      job: this.state.job
    };

    console.log(passengerAdd);
    APIService.addPassenger(passengerAdd);
    window.location.reload();
    this.handleClose();
  };
  handleOnDelete(id: number) {
    APIService.deletePassenger(id);
    window.location.reload();
    
  }

  render() {
    return (
      <main>
        <Table striped bordered hover>
          <thead>
            <PassengerColumn />
          </thead>
          <tbody>
            {this.state.passengers.map((pass: Passengers) => (
              <React.Fragment key={pass.id}>
                <tr>
                  <td>{pass.name}</td>
                  <td>{pass.job}</td>
                  <td>{pass.email}</td>
                  <td>
                    <ButtonStyle onClick={() => this.handleShow(pass)}>Edit</ButtonStyle>
                  </td>
                  <td>
                    <ButtonStyle onClick={() => this.handleOnDelete(pass.id)}>
                      Delete
                    </ButtonStyle>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </Table>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Passenger</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleOnSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the flight number"
                  value={this.state.name}
                  onChange={this.handleName}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  required
                  placeholder="Enter email address"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Job</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.job}
                  onChange={this.handleJob}
                  placeholder="Enter current job"
                  required
                  
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <ButtonStyle onClick={this.handleAddShow}>Add Passenger</ButtonStyle>
        {/*Add Passenger Modal */}
        <Modal
          show={this.state.addShow}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Passenger</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleAddSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the passenger's name"
                  value={this.state.name}
                  onChange={this.handleName}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  placeholder="Enter the passenger's email address"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Job</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.job}
                  onChange={this.handleJob}
                  placeholder="Enter the passenger's current job"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </main>
    );
  }
}
export default Passenger;
