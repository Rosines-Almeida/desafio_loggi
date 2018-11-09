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

