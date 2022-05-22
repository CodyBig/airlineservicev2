using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace FlightService
{
    public class Flight
    {
        public int Id { get; set; }
        public int FlightNumber { get; set; }
        public DateTime DepartureDateTime { get; set; }
        public DateTime ArrivalDateTime { get; set; }
        [Required]
        [MaxLength(50)]
        public string DepartureAirport { get; set; } = null!;
        [Required]
        [MaxLength(50)]
        public string ArrivalAirport { get; set; } = null!;
        public int MaxCapacity { get; set; }
        public ICollection<Passenger> Passengers { get; set; } = new List<Passenger>();
        [NotMapped]
        public DateTime DepartureDate => this.DepartureDateTime.Date;
        [NotMapped]
        public string DepartureTime => this.DepartureDateTime.ToShortTimeString();
        [NotMapped]
        public DateTime ArrivalDate => this.ArrivalDateTime.Date;
        [NotMapped]
        public string ArrivalTime => this.ArrivalDateTime.ToShortTimeString();
    }
}