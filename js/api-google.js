// TESTAR QUERY ALLCITIES COM A LOGGI:
// let city = 'Rio de Janeiro';
// let cityData = allCities['data']['allCities']['edges'].filter(item => item.node.name === city);
// let cityCoordinates = JSON.parse(cityData[0]['node']['geoCenter'])['coordinates'];
// var center = {lat: cityCoordinates[0], lng: cityCoordinates[1]};


// console.log(googleKey)

var map, heatmap;

function initMap() {
  
  // Get coordinates of selected city
  let city = 'Rio de Janeiro';
  let cityCoordinates = allCities.filter(item => item.name === city);  
  console.log(allCities);
  var center = {lat: cityCoordinates[0]['coordinates'][0], lng: cityCoordinates[0]['coordinates'][1]};
  
  // Add Marker Cluster Map
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center
  });
  
  var label = 'mensageiro';
  
  var markers = locations['data']['closestDrivers']['drivers'].map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label
    });
  });
  
  var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
    
  // Add Heat Map

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });

  function getPoints() {
    return locations['data']['closestDrivers']['drivers'].map(l => new google.maps.LatLng(l.lat, l.lng));
  }

  // Set radius to Heatmap
  heatmap.set('radius', 20);
}


function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}
