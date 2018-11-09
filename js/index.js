$(document).ready(function(){

	$('<script></script>').attr('src', `https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=visualization&callback=initMap`)

	// $('.splash').delay('2000').fadeOut('slow');
	
	$(".btn-fav").click(function() {
		// $("#more").classList.toggle("liked");
		let getCity = JSON.parse(localStorage.getItem("city"));
		// let getReg = JSON.parse(localStorage.getItem("region"));
		let city = "São Paulo";
		// $("#yourid option:selected").text();
		// let reg = $(icon).attr("id");
		console.log(city);

		if (getCity) {
			let index = getCity.findIndex( value => value === city );
			if ( index >= 0 ){
				newFavs = [ ...getCity];
				newFavs.splice(index, 1);
			} else{
				newFavs = [ ...getCity, city ];
			}
		} else {
			newFavs = [ city ];
		}
		localStorage.setItem("city", JSON.stringify(newFavs));

	})

});

function requestLoggiAPI(query) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': loggiApiKey
      },
      credentials: 'include',
      body: JSON.stringify({
      	operationName: null,
      	query,
      	variables: {}
      })
    }
    return fetch(`https://www.loggi.com/graphql`, options);
  }

let queryDB = `
		{
  	closestDrivers(productType: 0, transportType: "1", lat: -23.6, lng: -46.7, radius: 12.0, limit: 500) {
    	driversCount
    	readyDriversCount
    	busyDriversCount
    	drivers {
     		lng
      	lat
      	busy
    	}
  	}
	} 
	`;

requestLoggiAPI(queryDB)
	.then(response => response.json())
	.then(data => console.log(data));