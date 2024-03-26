const custMotel = {
	// set as array
	cust_data: ["John Doe", "1986-04-26", "Male", "Single Bed"],
	// set as sub-object 1
	paymentInfo: {
		custPayMeth: "Credit Card",
		custAddrMail: "23 Higgins Line, St. John's, NL, A1B 4J6",
	},
	// set as sub-object 2
	bookingInfo: {
		custPhone: "709-555-5555",
		dateCheckIn: "2024-03-24",
		dateCheckOut: "2024-04-01",
        numRoom: "426"
	},
	
	// object methods
	// Customer age
	dateToday: new Date(),
	getCustAge: function() {

		return
	},
	// Duration of stay
	getCustStay: function() {
		// Check-out date - check-in date
		return
	},

	// Template string - customer description
	custDescr: `${cust_data[0]} is a ${getCustAge()}-year old ${cust_data[2]}`
}
