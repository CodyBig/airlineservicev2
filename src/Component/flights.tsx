import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import FlightColumn from "./flightcolumn";
import APIService from "../services/apiServices";
import Flight from "../Model/flight";
import { AxiosResponse } from "axios";
import flight, { flight_dto } from "../Model/flight";
type flightProps = {};

type flightState = {
  showFlight: boolean;
  addFlight: boolean;
  id: number;
  flightValue: number;
  departureAirValue: string;
  arrivalAirValue: string;
  departureTimeValue: string;
  arrivalTimeValue: string;
  departureDateValue: string;
  ArrivingDateValue: string;
  maxCapValue: number;
  flights: Flight[];
};

class Flights extends React.Component<flightProps, flightState> {
  constructor(props: flightProps) {
    super(props);
    this.state = {
      showFlight: false,
      addFlight: false,
      id: 0,
      flightValue: 0,
      departureAirValue: "",
      arrivalAirValue: "",
      departureTimeValue: "",
      arrivalTimeValue: "",
      departureDateValue: "",
      ArrivingDateValue: "",
      maxCapValue: 10,
      flights: [],
    };
  }
  //calling API to get the flights
  componentDidMount() {
    APIService.getFlights()
      .then((response: AxiosResponse<Flight[]>) => {
        this.setState({
          flights: response.data,
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  //called when the component updates to refresh data

  //Handles the closing of the edit flight modal
  //Handles to try and refresh data again
  handleClose = () => {
    this.setState({ showFlight: false, addFlight: false });
    window.location.reload();
  };

  //Handles the open state of Edit Flight Modal
  //sets the modal with the current flight data
  handleShow = (flight: Flight) => {
    this.setState({
      showFlight: !false,
      id: flight.id,
      flightValue: flight.flightNumber,
      departureAirValue: flight.arrivalAirport,
      arrivalAirValue: flight.arrivalAirport,
      departureTimeValue: flight.departureTime,
      arrivalTimeValue: flight.arrivalTime,
      departureDateValue: flight.departureDate,
      ArrivingDateValue: flight.arrivalDate,
      maxCapValue: flight.maxCapacity,
    });
  };

  handleAddShow = () => {
    this.setState({ addFlight: true });
  };

  //handle for getting the flight number values in the edit flight modal
  handleFlightNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ flightValue: event.target.value as unknown as number });
  };
  //handle for getting the depart airport values in the edit flight modal
  handleDepartAir = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ departureAirValue: event.target.value });
  };
  //handle for getting the arriving airport values in the edit flight modal
  handleArrivalAirValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ arrivalAirValue: event.target.value });
  };
  //handle for getting the departure date values in the edit flight modal
  handleDepartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ departureDateValue: event.target.value });
  };
  //handle for getting the arriving date values in the edit flight modal
  handleArrivingDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ArrivingDateValue: event.target.value });
  };
  //handle for getting the departing time values in the edit flight modal
  handleDepartTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ departureTimeValue: event.target.value });
  };
  //handle for getting the arriving time values in the edit flight modal
  handleArrivalTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ arrivalTimeValue: event.target.value });
  };
  //handle for getting the flight capacity values in the edit flight modal
  handleMaxCap(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ maxCapValue: event.target.value as unknown as number });
  }

  //handle for seeting the new values in the edit modal
  handleOnSubmit = (e: any) => {
    e.preventDefault();
    const flightEdit: Flight = {
      id: this.state.id,
      flightNumber: this.state.flightValue,
      departureDate: this.state.departureDateValue,
      arrivalDate: this.state.ArrivingDateValue,
      departureAirport: this.state.departureAirValue,
      arrivalAirport: this.state.arrivalAirValue,
      departureTime: this.state.departureTimeValue,
      arrivalTime: this.state.arrivalTimeValue,
      maxCapacity: this.state.maxCapValue,
    };
    console.log(flightEdit);
    APIService.editFlight(flightEdit);
    window.location.reload();
    this.handleClose();
  };

  //handleAddSubmit
  handleAddSubmit = (e: any) => {
    e.preventDefault();
    const flightAdd: flight_dto = {
      flightNumber: this.state.flightValue,
      departureDate: this.state.departureDateValue,
      arrivalDate: this.state.ArrivingDateValue,
      departureAirport: this.state.departureAirValue,
      arrivalAirport: this.state.arrivalAirValue,
      departureTime: this.state.departureTimeValue,
      arrivalTime: this.state.arrivalTimeValue,
      maxCapacity: this.state.maxCapValue,
    };
    APIService.addFlight(flightAdd);
    console.log("Flight Number " + this.state.flightValue)
    this.handleClose();
  };

  handleAddSubmitClick = (e: any) => {
    e.preventDefault();
    const flightAdd: flight_dto = {
      flightNumber: this.state.flightValue,
      departureDate: this.state.departureDateValue,
      arrivalDate: this.state.ArrivingDateValue,
      departureAirport: this.state.departureAirValue,
      arrivalAirport: this.state.arrivalAirValue,
      departureTime: this.state.departureTimeValue,
      arrivalTime: this.state.arrivalTimeValue,
      maxCapacity: this.state.maxCapValue,
    };
    APIService.addFlight(flightAdd);
    this.handleClose();
  };


  handleOnDelete(id: number) {
    APIService.deleteFlight(id);
    window.location.reload();
  }
  render() {
    return (
      <main>
        <Table striped bordered hover>
          <thead>
            <FlightColumn />
          </thead>
          <tbody>
            {this.state.flights.map((flights: Flight) => (
              <React.Fragment key={flights.id}>
                <tr>
                  <td>{flights.flightNumber}</td>
                  <td>{flights.departureDate.toString()}</td>
                  <td>{flights.arrivalDate.toString()}</td>
                  <td>{flights.departureAirport}</td>
                  <td>{flights.arrivalAirport}</td>
                  <td>{flights.departureTime.toString()}</td>
                  <td>{flights.arrivalTime.toString()}</td>
                  <td>{flights.maxCapacity}</td>
                  <td>
                    <button onClick={() => this.handleShow(flights)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => this.handleOnDelete(flights.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </Table>


        <button onClick={this.handleAddShow}>Add Flight</button>


        <Modal
          show={this.state.showFlight}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Flight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleOnSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>id</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.id}
                  name="FlightId"
                  disabled={true}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Flight Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the flight number"
                  value={this.state.flightValue}
                  name="FlightNumber"
                  onChange={this.handleFlightNum}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea3"
              >
                <Form.Label>Departure Airport</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.departureAirValue}
                  onChange={this.handleDepartAir}
                  placeholder="Enter the departing airport"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea4"
              >
                <Form.Label>Arrival Airport</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.arrivalAirValue}
                  onChange={this.handleArrivalAirValue}
                  placeholder="Enter the arriving airport"

                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea5"
              >
                <Form.Label>Departure Time</Form.Label>
                <Form.Control
                  type="time"
                  value={this.state.departureTimeValue}
                  onChange={this.handleDepartTime}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea6"
              >
                <Form.Label>Arrival Time</Form.Label>
                <Form.Control
                  type="time"
                  value={this.state.arrivalTimeValue}
                  onChange={this.handleArrivalTime}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea7"
              >
                <Form.Label>Departure Date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.departureDateValue}
                  onChange={this.handleDepartDate}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea8"
              >
                <Form.Label>Arrival Date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.ArrivingDateValue}
                  onChange={this.handleArrivingDate}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea9"
              >
                <Form.Label>Max Capacity</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.maxCapValue}
                  onChange={this.handleMaxCap}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        

        {/*Add Flight Modal*/}
        <Modal
          show={this.state.addFlight}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Flight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleAddSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Flight Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the flight number"
                  value={this.state.flightValue}
                  name="FlightNumber"
                  onChange={this.handleFlightNum}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Departure Airport</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.departureAirValue}
                  onChange={this.handleDepartAir}
                  placeholder="Enter the departing airport"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Arrival Airport</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.arrivalAirValue}
                  onChange={this.handleArrivalAirValue}
                  placeholder="Enter the arriving airport"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Departure Time</Form.Label>
                <Form.Control
                  type="time"
                  value={this.state.departureTimeValue}
                  onChange={this.handleDepartTime}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Arrival Time</Form.Label>
                <Form.Control
                  type="time"
                  value={this.state.arrivalTimeValue}
                  onChange={this.handleArrivalTime}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Departure Date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.departureDateValue}
                  onChange={this.handleDepartDate}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Arrival Date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.ArrivingDateValue}
                  onChange={this.handleArrivingDate}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Max Capacity</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.maxCapValue}
                  onChange={this.handleMaxCap}
                  placeholder="Enter the max capacity"
                />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.handleAddSubmitClick}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </main>
    );
  }
}
export default Flights;
