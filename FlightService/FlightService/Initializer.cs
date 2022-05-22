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
                if (!context.Flights.Any())
                {
                    var flightsToAdd = new Flight[]
                    {
                       new Flight {
                           FlightNumber = 50607,
                           DepartureDateTime = DateTime.Parse("2022-09-25"),
                           ArrivalDateTime = DateTime.Parse("2022-09-25"),
                           DepartureAirport = "Charleston International",
                           ArrivalAirport = "Myrtle Beach International",
                           MaxCapacity = 100
                       },
                       new Flight {
                           FlightNumber = 59607,
                           DepartureDateTime = DateTime.Parse("2022-12-25"),
                           ArrivalDateTime = DateTime.Parse("2022-12-25"),
                           DepartureAirport = "Biggs International",
                           ArrivalAirport = "Georgia International",
                           MaxCapacity = 50
                       },
                       new Flight {
                           FlightNumber = 30000,
                           DepartureDateTime = DateTime.Parse("2022-03-15"),
                           ArrivalDateTime = DateTime.Parse("2022-03-16"),
                           DepartureAirport = "Charleston International",
                           ArrivalAirport = "Myrtle Beach International",
                           MaxCapacity = 300
                       }
                    };
                    context.Flights.AddRange(flightsToAdd);
                    context.SaveChanges();
                }
                if (!context.Passengers.Any())
                {
                    var passengersToAdd = new Passenger[]
                    {
                        new Passenger {
                            Name="Cody",
                            Email="cbiggs@skillstorm.com",
                            Job="Software Developer"
                        },
                        new Passenger {
                            Name="Jeff",
                            Email="jeffdaniels@skillstorm.com",
                            Job="Pirate Captain"
                        },
                        new Passenger {
                            Name="Branden",
                            Email="bbrown@gmail.com",
                            Job="Retired"
                        }
                    };
                    context.Passengers.AddRange(passengersToAdd);
                    context.SaveChanges();
                }
                if (!context.Confirmations.Any())
                {
                    var conToAdd = new Confirmation[]
                    {
                       new Confirmation {
                           BookingNumber= 20607,
                           FlightId=1,
                           PassengerId=1,
                       },
                       new Confirmation {
                           BookingNumber= 70607,
                           FlightId=2,
                           PassengerId=2,
                       },
                       new Confirmation {
                           BookingNumber= 30607,
                           FlightId=3,
                           PassengerId=3
                       },
                    };
                    context.Confirmations.AddRange(conToAdd);
                    context.SaveChanges();
                }
            }
        }
    }
}