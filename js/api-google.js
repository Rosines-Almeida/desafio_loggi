// TESTAR QUERY ALLCITIES COM A LOGGI:
// let city = 'Rio de Janeiro';
// let cityData = allCities['data']['allCities']['edges'].filter(item => item.node.name === city);
// let cityCoordinates = JSON.parse(cityData[0]['node']['geoCenter'])['coordinates'];
// let center = {lat: cityCoordinates[0], lng: cityCoordinates[1]};

let map, heatmap;

function initMap(messengerLocations, lat, lng, data) {
  
  // Add Marker Cluster Map
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat, lng}
  });
  
  let label = 'mensageiro';
  
  let markers = messengerLocations.map(function(location, i) {
    return new google.maps.Marker({
      position: {lat: location['lat'], lng: location['lng']},
      label
    });
  });
  
  let markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
    
  // Add Heat Map

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });

  function getPoints() {
    return messengerLocations.map(l => new google.maps.LatLng(l.lat, l.lng));
  }

  // Set radius to Heatmap
  heatmap.set('radius', 20);

  
  //Plygn Map

  // const zones = {
  //   sul: ['Cambuci', 'Ipiranga', 'Sacomã', 'Cursino', 'Jabaquara', 'Cidade Ademar', 'Pedreira',
  //   'Grajaú', 'Marsilac', 'Jardim Ângela', 'Capão Redondo', 'Campo Limpo', 'Vila Sônia', 'Morumbi',
  //   'Itaim Bibi', 'Jardim Paulista', 'Vila Mariana'],
  //   leste: ["Cangaíba","Ermelino Matarazzo","Vila Jacuí","São Miguel","Jardim Helena","Itaim Paulista",
  //   "Lajeado","Guaianazes","Cidade Tiradentes","Iguatemi","São Rafael","São Mateus","Sapopemba",
  //   "São Lucas","Vila Prudente","Moóca","Belém","Tatuapé","Penha"],
  //   central: ["Barra Funda", "Bom Retiro", "Pari", "Brás", "Sé", "Liberdade", "Bela Vista","Consolação"],
  //   oeste: ['Perdizes', 'Pinheiros', 'Butantã', 'Rio Pequeno', 'Raposo Tavares', 'Jaguará', 'Anhanguera',
  //   'Perus', 'Brasilândia', 'Cachoeirinha'],
  //   norte: ['Casa Verde', 'Mandaqui', 'Tremembé', 'Jaçanã', 'Vila Maria']
  // }

  // let polygnCoordinates = [];
  // for (zone in zones) {
  //   let zoneColor = '#FF0000';
  //   zones[zone].map(neighborhood => {
  //     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${neighborhood}&key=AIzaSyDAFO9LIL-H7SvL8XI52rtIgc34H9JN1Kg`)
  //     .then(res => res.json())
  //     .then(data => {
  //       let neighborhoodCoordinates = {lat: data["results"][0]["geometry"]["location"]["lat"], lng: data["results"][0]["geometry"]["location"]["lng"]};
  //       polygnCoordinates.push(neighborhoodCoordinates);
  //     })
  //   })
  //   var polygon = new google.maps.Polygon({
  //     paths: polygnCoordinates,
  //     strokeColor: zoneColor,
  //     strokeOpacity: 0.8,
  //     strokeWeight: 3,
  //     fillColor: zoneColor,
  //     fillOpacity: 0.35
  //   });
  //   // return polygon;
  //   polygon.setMap(map);
  // } 
  
  // // let polygon = getPolygnCoordinates(zones);

  insertAmountInformation(data);
}


function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  let gradient = [
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
