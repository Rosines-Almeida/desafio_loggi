$(document).ready(function(){

	// $('.splash').delay('2000').fadeOut('slow');
	
	$(".btn-fav").click(function() {
		let getCity = JSON.parse(localStorage.getItem("city"));
		let getReg = JSON.parse(localStorage.getItem("region"));
		let city = $("#city option:selected").text();
		let reg = $("#region option:selected").text();
		console.log(city);
		console.log(reg);
		let favObj = [ {city: getCity, reg: getReg} ]
		
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
		newFavObj = [favObj]
		localStorage.setItem("city", JSON.stringify(newFavsCity));
		localStorage.setItem("region", JSON.stringify(newFavsReg));


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