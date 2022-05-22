using System;
using System.Collections.Generic;
namespace FlightService
{
    public partial class Confirmation
    {
        public int Id { get; set; }
        public int BookingNumber { get; set; }
        public int FlightId { get; set; }
        public int PassengerId { get; set; }
    }
}