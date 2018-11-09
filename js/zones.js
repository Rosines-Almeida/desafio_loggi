// function getPolygnCoordinates(zones) {
//   let polygnCoordinates = [];
//   for (zone in zones) {
//     let zoneColor = '#FF0000';
//     zones[zone].map(neighborhood => {
//       fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${neighborhood}&key=AIzaSyDAFO9LIL-H7SvL8XI52rtIgc34H9JN1Kg`)
//       .then(res => res.json())
//       .then(data => {
//         let neighborhoodCoordinates = {lat: data["results"][0]["geometry"]["location"]["lat"], lng: data["results"][0]["geometry"]["location"]["lng"]};
//         polygnCoordinates.push(neighborhoodCoordinates);
//       })
//     })
//     var polygon = new google.maps.Polygon({
//       paths: polygnCoordinates,
//       strokeColor: zoneColor,
//       strokeOpacity: 0.8,
//       strokeWeight: 3,
//       fillColor: zoneColor,
//       fillOpacity: 0.35
//     });
//     return polygon;
//   } 
// }

const SPzones = {
  sul: {
    lat: '23.652235', 
    lng: '-46.660806',
    zoom: '15'
  },
  leste: {
    lat: '-23.532511', 
    lng: '-46.503247',
    zoom: '15'
  },
  central: {
    lat: '-23.544173', 
    lng: '-46.644298',
    zoom: '15'
  },
  oeste: {
    lat: '-23.580006', 
    lng: '-46.699459',
    zoom: '15'
  },
  norte: {
    lat: '-23.479136', 
    lng: '-46.671005',
    zoom: '15'
  }
}