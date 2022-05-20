import axios from "react";

interface Passenger {
    id: number;
    name: string;
    email: string;
    job: string;
}
export interface passenger_dto{
   name: string; 
   email: string;
   job: string
}

export default Passenger;