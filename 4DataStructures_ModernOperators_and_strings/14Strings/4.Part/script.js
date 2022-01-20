// INPUT
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// OUTPUT

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightStatus = flights.split('+_');

const flight = flightStatus.map((flight) => {
  const status = flight.split(';');
  const departArrival = status[0].replaceAll('_', ' ').trim();
  const start = status[1].slice(0, 3).toUpperCase();
  const end = status[2].slice(0, 3).toUpperCase();
  const time = status[3].replace(':', 'h');
  const str = `${
    departArrival.startsWith('Delayed') ? '🔴 ' + departArrival : departArrival
  } ${start} to ${end} (${time})`.padStart(40, ' ');
  return str;
});

for (const f of flight) {
  console.log(f);
}
