using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
namespace FlightService
{
    public partial class AirportDBContext : DbContext
    {
        public AirportDBContext()
        {
        }
        public AirportDBContext(DbContextOptions<AirportDBContext> options)
            : base(options)
        {
        }
        public virtual DbSet<Confirmation> Confirmations { get; set; } = null!;
        public virtual DbSet<Flight> Flights { get; set; } = null!;
        public virtual DbSet<Passenger> Passengers { get; set; } = null!;
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Flight>(entity =>
            {
                entity.HasMany(flight => flight.Passengers)
                    .WithMany(passenger => passenger.Flights)
                    .UsingEntity<Confirmation>();
            });
            modelBuilder.Entity<Passenger>(entity =>
            {
                entity.HasMany(passenger => passenger.Flights)
                    .WithMany(flight => flight.Passengers)
                    .UsingEntity<Confirmation>();
            });
        }
    }
}