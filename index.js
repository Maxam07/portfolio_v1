udemy_cert = document.querySelector(".certificate_udemy");
freeCodeCamp = document.querySelector(".certificate_freeCodeCamp");

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