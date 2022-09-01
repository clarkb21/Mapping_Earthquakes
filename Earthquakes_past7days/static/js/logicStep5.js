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
  "Satellite": satelliteStreets
};

// Create the earthquake layer for our map.
let earthquakes = new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
  Earthquakes: earthquakes
};

//Create the map object with center, zoom, and default layer.
let map = L.map("mapid", {
  center: [39.5, -98.5],
  zoom : 3,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);

//Accessing the earthequake past 7 days url.
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grabbing our GeoJSON data.
d3.json(earthquakeData).then(function(data) {
  //Creating a GeoJSON layer with the retrieved data.
  console.log(data);
  L.geoJSON(data, {
      // Turn each feature into a circleMarker on the map.
      pointToLayer: function(feature, latlng) {
        console.log(data);
        return L.circleMarker(latlng);
      },
      style : styleInfo,
      //Create pop up markers for each earthquake.
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
      }
  }).addTo(earthquakes);

 
  //Then we add the earthquake layer to our map.
  earthquakes.addTo(map);

 //Create a legend control object.
 var legend = L.control({position: 'bottomright'});

 legend.onAdd = function() {
     var div = L.DomUtil.create('div', 'info legend'),
     magnitudes = [0, 1, 2, 3, 4, 5],
     colors = [
       "#98ee00",
       "#d4ee00",
       "#eecc00",
       "#ee9c00",
       "#ea822c",
       "#ea2c2c"
     ];
 
     // loop through our intervals and generate a label with a colored square for each interval
     for (var i = 0; i < magnitudes.length; i++) {
         div.innerHTML +=
             '<i style="background:' + colors[i] + '"></i> ' +
             magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '<br>' : '+');
     }
 
     return div;
 };
 
 legend.addTo(map);

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
  
  //Create function to determine color of marker based on magnitude.
function getColor(magnitude) {
  if (magnitude > 5) {
    return "#ea2c2c";
  }
  if (magnitude > 4) {
    return "#ea822c";
  }
  if (magnitude > 3) {
    return "#ee9c00";
  }
  if (magnitude > 2) {
    return "#eecc00";
  }
  if (magnitude > 1) {
    return "#d4ee00";
  }
  return "#98ee00";
}


// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}



}});