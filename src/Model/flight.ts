export interface Flight {
    id: number;
    flightNumber: number;
    departureDate: string;
    arrivalDate: string;
    departureTime: string; 
    arrivalTime: string;
    departureAirport: string;
    arrivalAirport: string;
    maxCapacity: number;
}
export interface flight_dto{
    flightNumber: number;
    departureDate: string;
    arrivalDate: string;
    departureTime: string; 
    arrivalTime: string;
    departureAirport: string;
    arrivalAirport: string;
    maxCapacity: number;
}


export default Flight;