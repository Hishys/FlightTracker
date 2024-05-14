const { FlightRadar24API } = require("flightradarapi");
const frApi = new FlightRadar24API();

let flights = await frApi.getFlights();

console.log("flights");