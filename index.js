let slideIndex = 1; // Ensure slideIndex is initialized

udemy_cert = document.querySelector(".certificate_udemy");
freeCodeCamp = document.querySelector(".certificate_freeCodeCamp");

// View Certificate Button
function viewCert(buttonNum, event) {

    switch(buttonNum) {
        case 1: 
            udemy_cert.style.display = "block";
            freeCodeCamp.style.display = "none"
            console.log("clicked 1")
            break;
        case 2:
            freeCodeCamp.style.display = "block"
            udemy_cert.style.display = "none"
            console.log("clicked 2")
            break;
        default:
            alert("Unknown button clicked")
    }

    event.stopPropagation();
};

document.querySelector(".udemyBtn").addEventListener('click', function(event) {
    viewCert(1, event)
})

document.querySelector(".freeCodeCampBtn").addEventListener('click', function(event) {
    viewCert(2, event)
})

document.addEventListener('click', function() {
    udemy_cert.style.display = "none"
    freeCodeCamp.style.display = "none"
});

// Slideshow Chevron
    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlide");

        // Ensure slideIndex stays within bounds
        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Show the current slide
        slides[slideIndex - 1].style.display = "block";
    }

    // Initially show the first slide
    showSlides(slideIndex);