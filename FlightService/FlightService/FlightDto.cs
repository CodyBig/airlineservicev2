namespace FlightService
{
    public class FlightDto
    {
        public int FlightNumber { get; set; }
        public string DepartureDate { get; set; }
        public string ArrivalDate { get; set; }
        public string DepartureTime { get; set; }
        public string ArrivalTime { get; set; }
        public string DepartureAirport { get; set; } = null!;
        public string ArrivalAirport { get; set; } = null!;
        public int MaxCapacity { get; set; }
    }
}
