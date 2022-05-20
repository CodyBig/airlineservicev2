
import flight, { flight_dto } from '../Model/flight';
import passengers, { passenger_dto } from '../Model/passengers';
import confirm from '../Model/confirmation';
import axios from "axios";

const http = axios.create({
    baseURL: "https://localhost:7237",
    headers: {
        'Content-Type': 'application/json'
    }
});

const getPassengers = () => {
    return http.get<Array<passengers>>("/api/Passengers");
};

const getPassenger = (id: number) => {
    return http.get<passengers>(`api/Passengers/${id}`);
}

const addPassenger = (passenger: passenger_dto) => {
    return http.post<passenger_dto>("api/Passengers", passenger);
};

const editPassenger = (passenger: passengers) => {
    return http.put<passengers>(`api/Passengers/${passenger.id}`, passenger);
};

const deletePassenger = (id: number) => {
    return http.delete<passengers>(`api/Passengers/${id}`);
};

//Flight API
const getFlights = () => {
    return http.get<Array<flight>>("/api/Flights");
};

const getFlight = (id: number) => {
    return http.get<flight>(`api/Flights/${id}`);
}

const addFlight = (flight: flight_dto) => {
    return http.post<flight_dto>("api/Flights", flight);
};

const editFlight = ( flight: flight) => {
    return http.put<flight>(`api/Flights/${flight.id}`, flight);
};

const deleteFlight = (id: number) => {
    return http.delete<flight>(`api/Flights/${id}`);
};

//Confirmation API
const getConfirmations = () => {
    return http.get<Array<confirm>>("/api/Confirmations");
}

const getConfirmation = (id: number) => {
    return http.get<confirm>(`api/Confirmations/${id}`);
}

const addConfirmation = (confirm: confirm) => {
    return http.post<confirm>("api/Confirmations", confirm);
};

const editConfirmation = (confirm: confirm) => {
    return http.put<confirm>(`api/Confirmations/${confirm.Id}`, confirm);
};

const deleteConfirmation = (id: number) => {
    return http.delete<confirm>(`api/Confirmations/${id}`);
};

const APIService = {
    getPassengers,
    getPassenger,
    addPassenger,
    editPassenger,
    deletePassenger,

    getFlight,
    getFlights,
    addFlight,
    editFlight,
    deleteFlight,

    getConfirmation,
    getConfirmations,
    addConfirmation,
    editConfirmation,
    deleteConfirmation,
    
};

export default APIService;