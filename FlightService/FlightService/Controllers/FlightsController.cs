using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FlightService;

namespace FlightService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase
    {
        private readonly AirportDBContext _context;

        public FlightsController(AirportDBContext context)
        {
            _context = context;
        }

        // GET: api/Flights
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Flight>>> GetFlights()
        {
          if (_context.Flights == null)
          {
              return NotFound();
          }
            return await _context.Flights.ToListAsync();
        }

        // GET: api/Flights/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Flight>> GetFlight(int id)
        {
          if (_context.Flights == null)
          {
              return NotFound();
          }
            var flight = await _context.Flights.FindAsync(id);

            if (flight == null)
            {
                return NotFound();
            }

            return flight;
        }

        // PUT: api/Flights/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFlight(int id, FlightDto flight)
        {
            //if (id != flight.Id)
            //{
            //    return BadRequest();
            //}
            Console.WriteLine(flight.DepartureDate);
            var fl = await _context.Flights.FindAsync(id);
            fl.FlightNumber = flight.FlightNumber;
            fl.ArrivalDateTime = DateTime.Parse($"{flight.ArrivalDate} {flight.ArrivalTime}");
            fl.DepartureDateTime =DateTime.Parse($"{flight.DepartureDate} {flight.DepartureTime}");
            fl.ArrivalAirport = flight.ArrivalAirport;
            fl.DepartureAirport = flight.DepartureAirport;
            fl.MaxCapacity = flight.MaxCapacity;

            _context.Entry(fl).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Flights
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Flight>> PostFlight(FlightDto flight)
        {
          if (_context.Flights == null)
          {
              return Problem("Entity set 'AirportDBContext.Flights'  is null.");
          }
            var f = new Flight
            {
                FlightNumber = flight.FlightNumber,
                ArrivalAirport = flight.ArrivalAirport,
                DepartureAirport = flight.DepartureAirport,
                ArrivalDateTime = DateTime.Parse($"{flight.ArrivalDate} {flight.ArrivalTime}"),
                DepartureDateTime = DateTime.Parse($"{flight.DepartureDate} {flight.DepartureTime}"),
                MaxCapacity = flight.MaxCapacity
            };
            _context.Flights.Add(f);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFlight", new { id = f.Id }, f);
        }

        // DELETE: api/Flights/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFlight(int id)
        {
            if (_context.Flights == null)
            {
                return NotFound();
            }
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null)
            {
                return NotFound();
            }

            _context.Flights.Remove(flight);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FlightExists(int id)
        {
            return (_context.Flights?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
