import React, {useEffect, useState} from "react";
import './Component/passenger'
import {Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Passenger from './Component/passenger';
import Options from './Component/options';
import Flights from './Component/flights';
import Flight from './Model/flight';
import Passengers from './Model/passengers'
import APIService from './services/apiServices';
import Navigation from './Component/navigation';
import { AxiosResponse } from "axios";
type AppProps = {
 
};

type AppState = {
  flights: Flight[];
  passengers: Passengers[];

};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps){
    super(props);
    this.state = {flights: [], passengers:[]}
  }
 
  
  render() {
    return (
      <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Options/>} />
        <Route path="/flights" element={<Flights/>} />
        <Route path="/passenger" element={<Passenger />} />
      </Routes>
      </>
  
    );
  }


}

export default App;

