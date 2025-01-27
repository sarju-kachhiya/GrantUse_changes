$.validator.addMethod("email_check", function (value, element) {
	return (
		this.optional(element) ||
		/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(value)
	);
});
$.validator.addMethod("alpha", function (value, element) {
	return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
});
$("#contact_form").validate({
	errorClass: "color-red",
	rules: {
		dob: {
			required: true,
		},
		gender: {
			required: true,
		},
		email: {
			required: true,
			email_check: true,
		},
	},
	messages: {
		dob: {
			required: "The dob field is required.",
		},
		gender: {
			required: "The Gender field is required.",
		},
		email: {
			required: "The Email field is required.",
			email_check: "Enter valid email address",
		},
	},
	submitHandler: function (form) {
		form.submit();
	},
});
