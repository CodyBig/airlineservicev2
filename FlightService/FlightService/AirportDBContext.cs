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
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=LAPTOP-HNO13IG1;Initial Catalog=AirportDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)

        {
            modelBuilder.Entity<Confirmation>(entity =>
            {
                entity.ToTable("Confirmation");
            });

            modelBuilder.Entity<Flight>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.ArrivalAirport)
                    .HasMaxLength(50)
                    .IsUnicode(false);

            

                entity.Property(e => e.DepartureAirport)
                    .HasMaxLength(50)
                    .IsUnicode(false);
               


        entity.HasMany(p => p.pass)
                .WithMany(p => p.flight);

                entity.HasOne(d => d.IdNavigation)
                    .WithOne(p => p.Flight)
                    .HasForeignKey<Flight>(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Flights__Id__38996AB5");
            });

            modelBuilder.Entity<Passenger>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Job)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasMany(p => p.flight)
                .WithMany(p => p.pass);

                entity.HasOne(d => d.IdNavigation)
                    .WithOne(p => p.Passenger)
                    .HasForeignKey<Passenger>(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Passengers__Id__37A5467C");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
