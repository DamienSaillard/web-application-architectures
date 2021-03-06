var rental = {
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
    },
    {
      "id": "rr-sport",
      "pricePerDay": 60,
      "pricePerKm": 0.30
    },
    {
      "id": "p-boxster",
      "pricePerDay": 100,
      "pricePerKm": 0.45
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
      "returnDate": "2015-09-14",
      "distance": 150
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "carId": "rr-sport",
      "pickupDate": "2015-09-09",
      "returnDate": "2015-09-13",
      "distance": 550
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "carId": "p-boxster",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 100
    }
  ]
};

var cars = rental.cars;
var drivers = rental.drivers;

function getNbDays(start,end)
{
	var diff = Date.parse(end) - Date.parse(start);
	return diff/(24*60*60*1000)+1;
}

function getCar(id)
{
	for(var i = 0; i < cars.length; i++)
	{
		if(cars[i].id===id)
		{
			return cars[i];
		}
	}
}

function getRentalPrice(driver)
{
	var distance = driver.distance;
	var nbDays = getNbDays(driver.pickupDate,driver.returnDate);
	return distance * getCar(driver.carId).pricePerKm + nbDays * getCar(driver.carId).pricePerDay;
}

for(var i = 0; i < drivers.length; i++)
{
	document.write(drivers[i].driver.firstName + ': ' + getRentalPrice(drivers[i]) + '</br>');
}