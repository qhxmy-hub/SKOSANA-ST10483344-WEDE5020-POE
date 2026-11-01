
/* ==========================================
   THEMBA GIVERS NPO
   PART 3 - JAVASCRIPT
   ========================================== */


/* Wait until the webpage has finished loading */

document.addEventListener("DOMContentLoaded", function () {


    /* ==========================================
       1. FOOTER YEAR
       ========================================== */

    // Get all elements that display the current year.

    const yearElements = document.querySelectorAll(".current-year");

    // Get the current year from the computer's date.

    const currentYear = new Date().getFullYear();

    // Display the current year in the footer.

    yearElements.forEach(function (element) {

        element.textContent = currentYear;

    });



    /* ==========================================
       2. HOME PAGE SEARCH FEATURE
       ========================================== */

    // Find the search input on the home page.

    const helpSearch = document.getElementById("helpSearch");

    // Find the message that displays the search results.

    const searchMessage = document.getElementById("searchMessage");

    // Check whether the search input exists on the page.

    if (helpSearch && searchMessage) {

        // Get all the cards that contain searchable information.

        const helpCards = document.querySelectorAll(
            "#helpCards .card"
        );

        // Run this function whenever the visitor types something.

        helpSearch.addEventListener("input", function () {

            // Convert the search text to lowercase.

            const searchText = helpSearch.value.trim().toLowerCase();

            // Keep track of how many cards match the search.

            let matchingCards = 0;

            // Check every card on the page.

            helpCards.forEach(function (card) {

                // Get the searchable words stored in the card.

                const cardKeywords = card.getAttribute("data-search") || "";

                // Check the card's heading and paragraph as well.

                const cardContent = card.textContent.toLowerCase();

                // Check whether the search text matches the card.

                const matchesSearch =
                    cardKeywords.toLowerCase().includes(searchText) ||
                    cardContent.includes(searchText);

                // Hide cards that do not match the search.

                if (matchesSearch) {

                    card.classList.remove("hidden");

                    matchingCards++;

                } else {

                    card.classList.add("hidden");

                }

            });

            // Display a message depending on the search results.

            if (searchText === "") {

                searchMessage.textContent = "Showing all available ways to help.";

            } else if (matchingCards > 0) {

                searchMessage.textContent =
                    "Found " + matchingCards + " matching result(s).";

            } else {

                searchMessage.textContent =
                    "No matching results found. Try another search.";

            }

        });

    }



    /* ==========================================
       3. SERVICES PAGE SEARCH FEATURE
       ========================================== */

    // Find the search field used on the services page.

    const serviceSearch = document.getElementById("service-search");

    // Find the message used to display service search results.

    const serviceFeedback = document.getElementById("search-feedback");

    // Check whether the services search field exists.

    if (serviceSearch && serviceFeedback) {

        // Find all service cards.

        const serviceCards = document.querySelectorAll(".search-result");

        // Run the search whenever the visitor types.

        serviceSearch.addEventListener("input", function () {

            // Get the text entered by the visitor.

            const searchText = serviceSearch.value.trim().toLowerCase();

            // Count the matching activities.

            let matchingActivities = 0;

            // Check each service card.

            serviceCards.forEach(function (card) {

                // Get the text inside the card.

                const cardText = card.textContent.toLowerCase();

                // Check whether the card matches the search.

                const matchesSearch = cardText.includes(searchText);

                // Show or hide the card.

                if (matchesSearch) {

                    card.hidden = false;

                    matchingActivities++;

                } else {

                    card.hidden = true;

                }

            });

            // Display the search results.

            if (searchText === "") {

                serviceFeedback.textContent =
                    "Showing all community activities.";

            } else if (matchingActivities > 0) {

                serviceFeedback.textContent =
                    "Found " + matchingActivities + " matching activities.";

            } else {

                serviceFeedback.textContent =
                    "No activities match your search. Try another word.";

            }

        });

    }



    /* ==========================================
       4. IMAGE GALLERY LIGHTBOX
       ========================================== */

    // Find all images that belong to the gallery.

    const galleryImages = document.querySelectorAll(".gallery-image");

    // Find the lightbox container.

    const lightbox = document.getElementById("gallery-lightbox");

    // Only run the gallery code if the page contains a gallery.

    if (lightbox && galleryImages.length > 0) {

        // Find the large image displayed inside the lightbox.

        const lightboxImage = lightbox.querySelector("img");

        // Find the close button.

        const closeButton = lightbox.querySelector(".lightbox-close");

        // Find the previous image button.

        const previousButton = lightbox.querySelector(".lightbox-prev");

        // Find the next image button.

        const nextButton = lightbox.querySelector(".lightbox-next");

        // Keep track of the image currently being displayed.

        let currentImage = 0;


        // Function used to display an image.

        function showImage(imageNumber) {

            // Calculate the image position.

            // This allows visitors to move from the last image
            // back to the first image.

            currentImage =
                (imageNumber + galleryImages.length) % galleryImages.length;

            // Change the large image to the selected gallery image.

            lightboxImage.src = galleryImages[currentImage].src;

            // Copy the alternative text from the original image.

            lightboxImage.alt = galleryImages[currentImage].alt;

            // Display the lightbox.

            lightbox.classList.add("open");

            // Prevent the background page from scrolling.

            document.body.style.overflow = "hidden";

        }


        // Function used to close the lightbox.

        function closeLightbox() {

            // Hide the lightbox.

            lightbox.classList.remove("open");

            // Allow the background page to scroll again.

            document.body.style.overflow = "";

        }


        // Add click events to all gallery images.

        galleryImages.forEach(function (image, index) {

            // Make each image accessible using the keyboard.

            image.setAttribute("tabindex", "0");

            // Open the selected image when clicked.

            image.addEventListener("click", function () {

                showImage(index);

            });


            // Allow visitors to open an image using Enter or Space.

            image.addEventListener("keydown", function (event) {

                if (event.key === "Enter" || event.key === " ") {

                    event.preventDefault();

                    showImage(index);

                }

            });

        });


        // Close the lightbox when the close button is clicked.

        if (closeButton) {

            closeButton.addEventListener("click", closeLightbox);

        }


        // Display the previous image.

        if (previousButton) {

            previousButton.addEventListener("click", function () {

                showImage(currentImage - 1);

            });

        }


        // Display the next image.

        if (nextButton) {

            nextButton.addEventListener("click", function () {

                showImage(currentImage + 1);

            });

        }


        // Close the lightbox when the visitor clicks outside the image.

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                closeLightbox();

            }

        });


        // Add keyboard controls for the gallery.

        document.addEventListener("keydown", function (event) {

            // Only run these controls when the lightbox is open.

            if (!lightbox.classList.contains("open")) {

                return;

            }

            // Close the lightbox when Escape is pressed.

            if (event.key === "Escape") {

                closeLightbox();

            }

            // Show the previous image when the left arrow is pressed.

            if (event.key === "ArrowLeft") {

                showImage(currentImage - 1);

            }

            // Show the next image when the right arrow is pressed.

            if (event.key === "ArrowRight") {

                showImage(currentImage + 1);

            }

        });

    }



    /* ==========================================
       5. ENQUIRY FORM VALIDATION
       ========================================== */

    // Find the enquiry form.

    const enquiryForm = document.getElementById("enquiryForm");

    // Find the enquiry feedback message.

    const enquiryFeedback = document.getElementById("enquiryFeedback");


    // Check whether the enquiry form exists on the current page.

    if (enquiryForm && enquiryFeedback) {

        // Run this code when the visitor submits the form.

        enquiryForm.addEventListener("submit", function (event) {

            // Prevent the form from submitting immediately.

            event.preventDefault();

            // Start by assuming that the form is valid.

            let formIsValid = true;


            // Get the values entered by the visitor.

            const name = document.getElementById("name").value.trim();

            const surname = document.getElementById("surname").value.trim();

            const suburb = document.getElementById("suburb").value.trim();

            const idNumber = document.getElementById("idnumber").value.trim();

            const age = document.getElementById("age").value;

            const activity = document.getElementById("activity").value;

            const donationType = document.getElementById("type").value;

            const message = document.getElementById("message").value.trim();


            // Clear previous feedback.

            enquiryFeedback.textContent = "";

            enquiryFeedback.className = "";


            // Check whether the name has been entered.

            if (name.length < 2) {

                formIsValid = false;

                enquiryFeedback.textContent =
                    "Please enter a valid name.";

            }


            // Check whether the surname has been entered.

            else if (surname.length < 2) {

                formIsValid = false;

                enquiryFeedback.textContent =
                    "Please enter a valid surname.";

            }


            // Check whether the suburb has been entered.

            else if (suburb === "") {

                formIsValid = false;

                enquiryFeedback.textContent =
                    "Please enter your suburb.";

            }


            // Check the ID number if the visitor supplied one.

            else if (idNumber !== "" && !/^[0-9]{13}$/.test(idNumber)) {

                formIsValid = false;

                enquiryFeedback.textContent =
                    "Your ID number must contain exactly 13 digits.";

            }


            // Check whether the age is within the allowed range.

            else if (age === "" || Number(age) < 16 || Number(age) > 100) {

                formIsValid = false;

                enquiryFeedback.textContent =
                    "Please enter an age between 16 and 100.";

            }


            // Check whether an activity has been selected.

            else if (activity === "") {

                formIsValid = false;

                enquiryFeedback.textContent =
                    "Please select an activity.";

            }


            // Check whether a donation or volunteer type was selected.

            else if (donationType === "") {

                formIsValid = false;

                enquiryFeedback.textContent =
                    "Please select a donation or volunteer activity.";

            }


            // Check whether the visitor entered a message.

            else if (message === "") {

                formIsValid = false;

                enquiryFeedback.textContent =
                    "Please enter an additional message.";

            }


            // Display the result of the validation.

            if (formIsValid === false) {

                // Show an error message.

                enquiryFeedback.classList.add("form-error");

                // Stop the submission process.

                return;

            }


            // If all fields are valid, display a success message.

            enquiryFeedback.classList.add("form-success");

            enquiryFeedback.textContent =
                "Your enquiry details are valid. Thank you for your interest in Themba Givers. Please contact us by email to send your enquiry.";


            // Prepare the visitor's information for an email.

            const emailSubject = "Themba Givers Donation / Volunteer Enquiry";

            const emailBody =
                "Name: " + name + "\n" +
                "Surname: " + surname + "\n" +
                "Suburb: " + suburb + "\n" +
                "ID Number: " + (idNumber || "Not provided") + "\n" +
                "Age: " + age + "\n" +
                "Activity: " + activity + "\n" +
                "Donation / Volunteer Type: " + donationType + "\n" +
                "Message: " + message;


            // Create an email link containing the enquiry details.

            const emailLink =
                "mailto:thembagiversofhope@gmail.com" +
                "?subject=" + encodeURIComponent(emailSubject) +
                "&body=" + encodeURIComponent(emailBody);


            // Open the visitor's default email application.

            window.location.href = emailLink;

        });

    }



    /* ==========================================
       6. CONTACT FORM VALIDATION
       ========================================== */

    // This section will work when the contact form is added
    // to Contact.html using the ID "contactForm".

    const contactForm = document.getElementById("contactForm");

    const contactFeedback = document.getElementById("contactFeedback");


    // Check whether the contact form exists.

    if (contactForm && contactFeedback) {

        // Run this code when the contact form is submitted.

        contactForm.addEventListener("submit", function (event) {

            // Stop the page from refreshing.

            event.preventDefault();

            // Get the visitor's information.

            const contactName =
                document.getElementById("contactName").value.trim();

            const contactEmail =
                document.getElementById("contactEmail").value.trim();

            const contactSubject =
                document.getElementById("contactSubject").value.trim();

            const contactMessage =
                document.getElementById("contactMessage").value.trim();


            // Check whether all required fields are completed.

            if (
                contactName === "" ||
                contactEmail === "" ||
                contactSubject === "" ||
                contactMessage === ""
            ) {

                contactFeedback.textContent =
                    "Please complete all the required fields.";

                contactFeedback.className = "form-error";

                return;

            }


            // Check whether the email address is valid.

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(contactEmail)) {

                contactFeedback.textContent =
                    "Please enter a valid email address.";

                contactFeedback.className = "form-error";

                return;

            }


            // Display a success message.

            contactFeedback.textContent =
                "Your message is ready. Your email application will open so you can review and send it.";

            contactFeedback.className = "form-success";


            // Prepare the email details.

            const emailSubject = "Themba Givers Website Contact";

            const emailBody =
                "Name: " + contactName + "\n" +
                "Email: " + contactEmail + "\n" +
                "Subject: " + contactSubject + "\n" +
                "Message: " + contactMessage;


            // Create the email link.

            const emailLink =
                "mailto:thembagiversofhope@gmail.com" +
                "?subject=" + encodeURIComponent(emailSubject) +
                "&body=" + encodeURIComponent(emailBody);


            // Open the visitor's email application.

            window.location.href = emailLink;

        });

    }

});
