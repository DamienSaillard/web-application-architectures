

for(var i = 0; i < drivers.length; i++)
{
	var nbDays = getNbDays(drivers[i].pickupDate,drivers[i].returnDate);
	var price = getAdaptedRentalPrice(drivers[i]);
	var commission = price*0.3;
	var insurance = commission*0.5;
	var roadAssistance = nbDays;
	var drivy = commission-insurance-roadAssistance;
	
	document.write(drivers[i].driver.firstName + ': ' + price
	+ '</br>Commission:</br>insurance: ' + insurance + '</br>road assistance: ' + roadAssistance + '</br>drivy: ' + drivy + '</br></br>'
	);
}