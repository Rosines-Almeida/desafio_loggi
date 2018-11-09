$(document).ready(function(){

	$('<script></script>').attr('src', `https://maps.googleapis.com/maps/api/js?key=AIzaSyDAFO9LIL-H7SvL8XI52rtIgc34H9JN1Kg&libraries=visualization&callback=initMap`)

	$('.splash').delay('2000').fadeOut('slow');
	
	$(".btn-fav").click(function() {
		let getCity = JSON.parse(localStorage.getItem("city"));
		let getReg = JSON.parse(localStorage.getItem("region"));
		let city = $("#city option:selected").text();
		let reg = $("#region option:selected").text();
		console.log(city);
		console.log(reg);
		// let favObj = [ {city: getCity, reg: getReg} ]
		
		if (getCity) {
			let indexCity = getCity.findIndex( value => value === city );
			if ( indexCity >= 0 ){
				newFavsCity = [ ...getCity];
				newFavsCity.splice(indexCity, 1);
			} else{
				newFavsCity = [ ...getCity, city ];
			}
		} else {
			newFavsCity = [ city ];
		}


		if (getReg) {
			let indexReg = getReg.findIndex( value => value === reg );
			if ( indexReg >= 0 ){
				newFavsReg = [ ...getReg];
				newFavsReg.splice(indexReg, 1);
			} else{
				newFavsReg = [ ...getReg, reg ];
			}
		} else {
			newFavsReg = [ reg ];
		}
		let favObj = [ {city: newFavsCity, reg: newFavsReg} ];
		newFavObj = [favObj];
		localStorage.setItem("city", JSON.stringify(newFavsCity));
		localStorage.setItem("region", JSON.stringify(newFavsReg));


	})

	requestLoggiAPI(queryDrivers)
	.then(response => response.json())
	.then(data => console.log(['data']['closestDrivers']['driversCount']));

	const totalDrivers = locations['data']['closestDrivers']['driversCount'];
	$('.total-number').html(totalDrivers);

	const availableDrivers = locations['data']['closestDrivers']['readyDriversCount'];
	$('.available-number').html(availableDrivers);

	const unavailableDrivers = locations['data']['closestDrivers']['busyDriversCount'];
	$('.unavailable-number').html(unavailableDrivers);

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

let queryDrivers = `
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


// requestLoggiAPI(queryDrivers)
// 	.then(response => response.json())
// 	.then(data => console.log(['data']['closestDrivers']['driversCount']));
	

