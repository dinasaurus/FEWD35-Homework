$(document).on("submit", "form", function(event) {
	event.preventDefault();

	var formData = {
		first_name: $("#firstname").val(),
		last_name: $("#lastname").val(),
		email_address: $("#emailaddress").val(),
		address: $("#address").val(),
		address_2: $("#address2").val(),
		city: $("#city").val(),
		state: $("#state").val(),
		country: $("#country").val()
	};

	console.log(formData);
	console.log(formData.address);

	for (key in formData) {
		if (formData[key] === "" && key !== "address2") {
			alert("Please fill out all fields!");
			return false;
		}
	}
	$("form")[0].submit(); 
	alert("Form submitted");

	
});