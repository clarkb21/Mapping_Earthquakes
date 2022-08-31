// Add console.log to check to see if code is working
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id : "streets-v11",
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id :"satellite-streets-v11",
    accessToken: API_KEY
});
// // Then we add our 'streets' tile layer to the map.
// streets.addTo(map); get rid of .addto(map) part because we will add this part later with the options
//Create a base layer that holds both maps.
let baseMaps = {
  "Streets" : streets,
  "Satellite Streets": satelliteStreets
};

//Create the map object with center, zoom, and default layer.
let map = L.map("mapid", {
  center: [43.7, -79.3],
  zoom : 11,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//Accessing the Toronto neighborhoods url.
let torontoHoods = "https://raw.githubusercontent.com/clarkb21/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  //Creating a GeoJSON layer with the retrieved data.
  console.log(data);
  L.geoJSON(data, {
      color : "blue",
      weight: 1, 
      fillColor: "yellow",
      onEachFeature: function(feature,layer) {
      layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>");
      }
  }).addTo(map);
});