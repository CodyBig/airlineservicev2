﻿using System;
using System.Collections.Generic;

namespace FlightService
{
    public partial class Flight
    {
        public int Id { get; set; }
        public int FlightNumber { get; set; }
        public DateTime DepartureDate { get; set; }
        public DateTime ArrivalDate { get; set; }
        public TimeSpan DepartureTime { get; set; }
        public TimeSpan ArrivalTime { get; set; }
        public string DepartureAirport { get; set; } = null!;
        public string ArrivalAirport { get; set; } = null!;
        public int MaxCapacity { get; set; }

        public ICollection<Passenger> pass { get; set; } = new List<Passenger>();
        public virtual Confirmation IdNavigation { get; set; } = null!;
    }
}
