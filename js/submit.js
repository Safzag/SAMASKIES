$("body > div.footer > div.footer-content > div.footer-section.contact-form > form > button").on("click", function(event) {
    var isValid = true; // Reset the validation flag before checking

    // Loop through each required input field
    $(".Safae").each(function() {
        if ($(this).val() === "") {
            isValid = false;
            $(this).css("border-color", "red"); // Highlight the empty field
        } else {
            $(this).css("border-color", ""); // Reset the field border color if filled
        }
    });

    // If the form is valid, show the alert
    if (isValid) {
        alert("Thank you for Submitting!");
    } else {
        event.preventDefault(); // Prevent form submission if validation fails
        alert("Error: Please fill out all required fields before submitting.");
    }
});
