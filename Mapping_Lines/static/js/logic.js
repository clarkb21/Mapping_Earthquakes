// Add console.log to check to see if code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.0522, -95.2437], 5);

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085], //LAX Airpot
  [37.6213, -122.3790], //SFO Airport
  [30.1975, -97.6664], //AUS Airpot
  [44.7415, -85.5793], //TVC Airport 
  [40.6413, -73.7781] //JFK Airport
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight : 4, 
  opacity : .5,
  dashArray : 8
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);