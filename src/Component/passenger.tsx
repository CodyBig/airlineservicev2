import React from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import APIService from "../services/apiServices";
import Passengers from "../Model/passengers";
import PassengerColumn from "./passengercolumn";
import { AxiosResponse } from "axios";
import passengers, { passenger_dto } from "../Model/passengers";
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
    APIService.getPassengers()
      .then((response: AxiosResponse<Passengers[]>) => {
        this.setState({
          passengers: response.data,
          show: false,
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  handleAddClose = () => {
    APIService.getPassengers()
      .then((response: AxiosResponse<Passengers[]>) => {
        this.setState({
          passengers: response.data,
          addShow: false,
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });
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
    this.handleAddClose();
  };
  handleOnDelete(id: number) {
    APIService.deletePassenger(id);
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
                    <button onClick={() => this.handleShow(pass)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleOnDelete(pass.id)}>
                      Delete
                    </button>
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
                  required
                  
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <button onClick={this.handleAddShow}>Add Passenger</button>
        {/*Add Passenger Modal */}
        <Modal
          show={this.state.addShow}
          onHide={this.handleAddClose}
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
