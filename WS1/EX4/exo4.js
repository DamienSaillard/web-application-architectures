var json = {
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
    }
  ],
  "drivers": [
    {
      "id": "1-pb-92",
      "driver": {
        "firstName": "Paul",
        "lastName": "Bismuth"
      },
      "carId": "p306",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-12",
      "distance": 100,
      "options":{
        "deductibleReduction": false
      }
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "carId": "p306",
      "pickupDate": "2015-09-10",
      "returnDate": "2015-09-15",
      "distance": 300,
      "options":{
        "deductibleReduction": true
      }
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "carId": "p306",
      "pickupDate": "2015-08-31",
      "returnDate": "2015-09-13",
      "distance": 1000,
      "options":{
        "deductibleReduction": true
      }
    }
  ]
};

var cars = json.cars;
var drivers = json.drivers;

for(var i = 0; i < drivers.length; i++)
{
	var nbDays = getNbDays(drivers[i].pickupDate,drivers[i].returnDate);
	var price = getAdaptedRentalPrice(drivers[i]);
	var commission = price*0.3;
	var insurance = commission*0.5;
	var roadAssistance = nbDays;
	var reduction = 0;
	if(drivers[i].options.deductibleReduction)
           reduction = 4 * nbDays;
	var drivy = commission-insurance-roadAssistance+reduction;
	price+=reduction;
	
	document.write(drivers[i].driver.firstName + ': ' + price
	+ '</br>Commission:</br>insurance: ' + insurance + '</br>road assistance: ' + roadAssistance + '</br>drivy: ' + drivy + '</br>reduction: ' + reduction + '</br></br>'
	);
}