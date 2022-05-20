using System;
using System.Collections.Generic;

namespace FlightService
{
    public partial class Passenger
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Job { get; set; } = null!;

        public ICollection<Flight> flight { get; set; } = new List<Flight>();

        public virtual Confirmation IdNavigation { get; set; } = null!;
    }
}
