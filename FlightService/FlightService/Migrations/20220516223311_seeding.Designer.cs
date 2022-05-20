﻿// <auto-generated />
using System;
using FlightService;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FlightService.Migrations
{
    [DbContext(typeof(AirportDBContext))]
    [Migration("20220516223311_seeding")]
    partial class seeding
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("FlightPassenger", b =>
                {
                    b.Property<int>("flightId")
                        .HasColumnType("int");

                    b.Property<int>("passId")
                        .HasColumnType("int");

                    b.HasKey("flightId", "passId");

                    b.HasIndex("passId");

                    b.ToTable("FlightPassenger");
                });

            modelBuilder.Entity("FlightService.Confirmation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("BookingNumber")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Confirmation", (string)null);
                });

            modelBuilder.Entity("FlightService.Flight", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("ArrivalAirport")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<DateTime>("ArrivalDate")
                        .HasColumnType("date");

                    b.Property<TimeSpan>("ArrivalTime")
                        .HasColumnType("time");

                    b.Property<string>("DepartureAirport")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<DateTime>("DepartureDate")
                        .HasColumnType("date");

                    b.Property<TimeSpan>("DepartureTime")
                        .HasColumnType("time");

                    b.Property<int>("FlightNumber")
                        .HasColumnType("int");

                    b.Property<int>("MaxCapacity")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Flights");
                });

            modelBuilder.Entity("FlightService.Passenger", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Job")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Passengers");
                });

            modelBuilder.Entity("FlightPassenger", b =>
                {
                    b.HasOne("FlightService.Flight", null)
                        .WithMany()
                        .HasForeignKey("flightId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FlightService.Passenger", null)
                        .WithMany()
                        .HasForeignKey("passId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("FlightService.Flight", b =>
                {
                    b.HasOne("FlightService.Confirmation", "IdNavigation")
                        .WithOne("Flight")
                        .HasForeignKey("FlightService.Flight", "Id")
                        .IsRequired()
                        .HasConstraintName("FK__Flights__Id__38996AB5");

                    b.Navigation("IdNavigation");
                });

            modelBuilder.Entity("FlightService.Passenger", b =>
                {
                    b.HasOne("FlightService.Confirmation", "IdNavigation")
                        .WithOne("Passenger")
                        .HasForeignKey("FlightService.Passenger", "Id")
                        .IsRequired()
                        .HasConstraintName("FK__Passengers__Id__37A5467C");

                    b.Navigation("IdNavigation");
                });

            modelBuilder.Entity("FlightService.Confirmation", b =>
                {
                    b.Navigation("Flight")
                        .IsRequired();

                    b.Navigation("Passenger")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
