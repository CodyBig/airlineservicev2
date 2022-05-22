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
                       new Flight {Id = 1, FlightNumber = 50607, DepartureDateTime = DateTime.Parse("2022-09-25"), ArrivalDateTime = DateTime.Parse("2022-09-25"), DepartureAirport = "Charleston International", ArrivalAirport = "Myrtle Beach International", MaxCapacity = 100 },
                       new Flight {Id = 2, FlightNumber = 59607, DepartureDateTime = DateTime.Parse("2022-12-25"), ArrivalDateTime = DateTime.Parse("2022-12-25"), DepartureAirport = "Biggs International", ArrivalAirport = "Georgia International", MaxCapacity = 50 },
                       new Flight {Id = 3, FlightNumber = 30000, DepartureDateTime = DateTime.Parse("2022-03-15"), ArrivalDateTime = DateTime.Parse("2022-03-16"), DepartureAirport = "Charleston International", ArrivalAirport = "Myrtle Beach International", MaxCapacity = 300 }
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
