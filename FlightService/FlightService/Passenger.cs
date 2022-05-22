using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlightService
{
    public partial class Passenger
    {
      [Key]
     
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Job { get; set; } = null!;

        public ICollection<Flight> flight { get; set; } = new List<Flight>();

        public virtual Confirmation IdNavigation { get; set; } = null!;
    }
}
