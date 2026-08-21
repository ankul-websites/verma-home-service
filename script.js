/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* =========================
   LANGUAGE SWITCH
========================= */

let currentLanguage = "en";

const languageBtn = document.getElementById("languageBtn");

languageBtn.addEventListener("click", () => {

    currentLanguage = currentLanguage === "en" ? "hi" : "en";

    document.querySelectorAll("[data-en]").forEach(element => {

        element.textContent =
            element.getAttribute(`data-${currentLanguage}`);

    });


    languageBtn.textContent =
        currentLanguage === "en" ? "हिंदी" : "English";

});


/* =========================
   FAQ
========================= */

document.querySelectorAll(".faq-item button")
.forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;

        document.querySelectorAll(".faq-item")
        .forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


/* =========================
   BOOKING FORM
========================= */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const service =
        document.getElementById("customerService").value;

    const address =
        document.getElementById("customerAddress").value.trim();

    const date =
        document.getElementById("customerDate").value;

    const message =
        document.getElementById("customerMessage").value.trim();


    if (!name || !phone || !service || !address || !date) {

        alert("Please fill all required fields.");

        return;
    }


    const whatsappText =

`Hello Verma Home Service 👋

I want to book a service.

Name: ${name}

Phone: ${phone}

Service: ${service}

Address: ${address}

Preferred Date: ${date}

Requirement:
${message || "Not specified"}

Thank you.`;


    const whatsappURL =
        "https://wa.me/919555319059?text="
        + encodeURIComponent(whatsappText);


    window.open(whatsappURL, "_blank");

});


/* =========================
   MINIMUM BOOKING DATE
========================= */

const dateInput =
    document.getElementById("customerDate");


const today =
    new Date().toISOString().split("T")[0];


dateInput.min = today;