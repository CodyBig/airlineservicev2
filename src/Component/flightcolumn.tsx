import React, {useEffect, useState} from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import APIService from '../services/apiServices';
import axios, { AxiosResponse } from 'axios';
import Passenger from './passenger';

function FlightColumn() {
  
  return (
    <React.Fragment>
    <>
    <tr>
      <th>Flight Number</th>
      <th>Departure Date</th>
      <th>Arrival Date</th>
      <th>Departure Airport</th>
      <th>Arrival Airport</th>
      <th>Departure Time</th>
      <th>Arrival Time</th>
      <th>Max Capacity</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </>
    </React.Fragment>
  );

}
export default FlightColumn;
