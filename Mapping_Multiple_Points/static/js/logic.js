// Add console.log to check to see if code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.0522, -98.2437], 4);

// Get data from cities.js
let cityData = cities;

  //Loop through the cities and create a marker for each
  cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius : city.population/200000,
        color : 'orange',
        weight : 4
        
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
  });


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);