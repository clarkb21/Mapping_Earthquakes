# Mapping Earthquake Data with Leaflet

## Purpose
- The purpose of this project is to demonstrate skills using Javascript, HTML, CSS, and Leaflet. 
- By using the documentation from the Leaflet library, I created a logic file using Javascript to create a map and overlay earthquake data

## Project Overview
- Using the Leaflet library and Mapbox map styles, world maps were created and styled with multiple layers to choose from. 
- Using earthquake data, I created markers to showcase the location and magnitude of earthquakes over the past seven days. 
- Pop ups were also created so the user can click on each marker for a more detailed event of the earthquake, including location and specific magnitude. 
- A legend was also added to the bottom right of the screen, for clearer interpretation of the circle markers. 

![image](https://user-images.githubusercontent.com/104038813/187976380-860bc4b2-fd32-4e82-9d1f-759a9abe52b9.png)


### Challenge Overview
- The challenge required me to add an additional overlay map of the tectonic plates to the existing map, where the user had the option to toggle on or off.
- The tectonic plate data was a geometry "linestring" object. 
- An additional element for the challenge was to add data for major earthquakes in the past 7 days (only earthquakes with a magnitude of 4.5 or higher). 
- The final piece to the challenge was to add an additional map layer style, which I chose to use the dark layer map. Now users will have three different options for map styles, plus the three overlay maps: earthquakes, tectonic plates, and major earthquakes. 

![image](https://user-images.githubusercontent.com/104038813/187977305-045ecd32-1e50-42d2-8d2c-36cb4cb8a961.png)

## Results
- By accessing the web page, users will have a visual display of earthquakes over the past seven days, plus be able to toggle options for tectonic plates and major earthquakes. 
- All earthquakes are color coded based on their magnitude. 
- The following code is shown to display how the layes were added to the webpage. 

![image](https://user-images.githubusercontent.com/104038813/187979121-a2cf824d-44ab-4966-b343-9ccb9e6bd611.png)




## Resources
- Data Source: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson, 
  https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json, 
  https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
- Software:  JavaScript, Leaflet
- MSU Bootcamp Spot Module 13: https://courses.bootcampspot.com/courses/2508/assignments/31923?module_item_id=636861
- Additional resources: openstreetmap.org, Leaflet






