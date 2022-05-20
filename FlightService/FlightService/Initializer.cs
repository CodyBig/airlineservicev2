using Microsoft.EntityFrameworkCore;

namespace FlightService
{
    public static class Initializer
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new AirportDBContext(serviceProvider.GetRequiredService<DbContextOptions<AirportDBContext>>()))
            {
                //context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                if (!context.Confirmations.Any())
                {
                    var conToAdd = new Confirmation[]
                    {
                       new Confirmation { BookingNumber= 20607 },
                       new Confirmation { BookingNumber= 70607 },
                       new Confirmation { BookingNumber= 30607 },

                    };
                    context.Confirmations.AddRange(conToAdd);
                    context.SaveChanges();
                }


                if (!context.Flights.Any())
                {
                    var flightToAdd = new Flight[]
                    {
                       new Flight {Id = 1, FlightNumber = 50607, DepartureDate = DateTime.Parse("2022-09-25"), ArrivalDate = DateTime.Parse("2022-09-25"), DepartureTime = TimeSpan.Parse("08:30:00"), ArrivalTime= TimeSpan.Parse("10:30:00"), DepartureAirport = "Charleston International", ArrivalAirport = "Myrtle Beach International", MaxCapacity = 100 },
                       new Flight {Id = 2, FlightNumber = 59607, DepartureDate = DateTime.Parse("2022-12-25"), ArrivalDate = DateTime.Parse("2022-12-25"), DepartureTime = TimeSpan.Parse("04:30:00"), ArrivalTime= TimeSpan.Parse("7:30:00"), DepartureAirport = "Biggs International", ArrivalAirport = "Georgia International", MaxCapacity = 50 },
                       new Flight {Id = 3, FlightNumber = 30000, DepartureDate = DateTime.Parse("2022-03-15"), ArrivalDate = DateTime.Parse("2022-03-16"), DepartureTime = TimeSpan.Parse("11:30:00"), ArrivalTime= TimeSpan.Parse("2:30:00"), DepartureAirport = "Charleston International", ArrivalAirport = "Myrtle Beach International", MaxCapacity = 300 }
                    };
                    context.Flights.AddRange(flightToAdd);
                    context.SaveChanges();
                }

                if (!context.Passengers.Any())
                {
                    var passToAdd = new Passenger[]
                    {
                        new Passenger {Id = 1, Name="Cody", Email="cbiggs@skillstorm.com", Job="Software Developer"},
                        new Passenger {Id= 2, Name="Jeff", Email="jeffdaniels@skillstorm.com", Job="Pirate Captain"},
                        new Passenger {Id = 3, Name="Branden", Email="bbrown@gmail.com", Job="Retired"}

                    };
                    context.Passengers.AddRange(passToAdd);
                    context.SaveChanges();
                }
            }
        }
    }
}
