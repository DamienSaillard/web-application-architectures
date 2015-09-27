function getAdaptedRentalPrice(driver)
{
	var discount = 1;
	var distance = driver.distance;
	var nbDays = getNbDays(driver.pickupDate,driver.returnDate);
	if(nbDays>10)
	{
		discount = 0.5;
	}
	if(nbDays>4)
	{
		discount = 0.7;
	}
	if(nbDays>1)
	{
		discount = 0.9;
	}
	return distance * getCar(driver.carId).pricePerKm + nbDays * getCar(driver.carId).pricePerDay * discount;
}

for(var i = 0; i < drivers.length; i++)
{
	document.write(drivers[i].driver.firstName + ': ' + getAdaptedRentalPrice(drivers[i]) + '</br>');
}