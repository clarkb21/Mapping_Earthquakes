// Add console.log to check to see if code is working
console.log("working");

// We create the tile layer that will be the background of our map.
let navDay = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id : "navigation-day-v1",
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let navNight = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id :"navigation-night-v1",
    accessToken: API_KEY
});
// // Then we add our 'streets' tile layer to the map.
// streets.addTo(map); get rid of .addto(map) part because we will add this part later with the options
//Create a base layer that holds both maps.
let baseMaps = {
  Day: navDay,
  Night: navNight
};

//Create the map object with center, zoom, and default layer.
let map = L.map("mapid", {
  center: [44, -80],
  zoom : 2,
  layers: [navNight]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//Accessing the Toronto data url.
let torontoData = "https://raw.githubusercontent.com/clarkb21/Mapping_Earthquakes/main/torontoRoutes.json";


// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  //Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature,layer) {
    layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2> <hr> <h3>Destination: " + feature.properties.dst + "</h3>");
      }
    }).addTo(map);
  });