
function parseJSONString(jsonString) {
	var parsedString;
	var hotels;
	var hotelsClean = [];
	try{
		parsedString = JSON.parse(jsonString);
		hotels = parsedString.hotelList;
		//console.log(hotels);
		if(hotels) {
			hotels.forEach(function(val) {
				hotelsClean.push(sanitizeData(val));
			});
		}

		return hotelsClean;
	} catch (e) {
		//console.log(e);
		//console.log(e.stack)
		if(e instanceof SyntaxError){
			throw new Error('BAD JSON');	
		} else {
			throw e;
		}

	}
}

function sanitizeData(hotel) {
	var hotelJson = 
		{
			"id": hotel.hotelId,
			"name": hotel.name,
			"hotelAddress": {
				"address": hotel.address,
				"city": hotel.city,
				"state": hotel.stateProvinceCode,
				"country": hotel.countryCode,
				"postalCode": hotel.postalCode
			},
			"starRating": hotel.hotelStarRating,
			"guestRating": hotel.hotelGuestRating,
			"description": hotel.shortDescription
		}
	return hotelJson;
}

module.exports.run = parseJSONString;