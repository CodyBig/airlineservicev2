import React, {useEffect, useState} from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import APIService from '../services/apiServices';
import axios, { AxiosResponse } from 'axios';
import Passenger from './passenger';

function PassengerColumn() {
  
  return (
    <React.Fragment>
    <>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>Email</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </>
    </React.Fragment>
  );

}
export default PassengerColumn;
