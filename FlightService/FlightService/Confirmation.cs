using System;
using System.Collections.Generic;

namespace FlightService
{
    public partial class Confirmation
    {
        public int Id { get; set; }
        public int BookingNumber { get; set; }

        public virtual Flight Flight { get; set; } = null!;
        public virtual Passenger Passenger { get; set; } = null!;
    }
}
