// Read More Section 
document.getElementById("toggleButton").onclick = function() {
    var content = document.getElementById("moreContent");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Show the content
        this.innerText = "Hide"; // Change button text
    } else {
        content.style.display = "none"; // Hide the content
        this.innerText = "Read More"; // Reset button text
    }
};


// Lightbox

//     function openLightbox(img) {
//         var lightbox = document.getElementById("lightbox");
//         var lightboxImage = document.getElementById("lightboxImage");
//         lightbox.style.display = "block";
//         lightboxImage.src = img.src; // Set the source of the lightbox image to the clicked image
//     }

//     function closeLightbox() {
//         var lightbox = document.getElementById("lightbox");
//         lightbox.style.display = "none"; // Hide the lightbox
//     }

//     document.addEventListener('keydown', function(event) {
//     if (event.key === "Escape") {
//         closeLightbox();
//     }
// });




function openLightbox(img) {
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightboxImage");
lightbox.style.display = "block";
lightboxImage.src = img.src;

// Enter fullscreen mode
if (lightbox.requestFullscreen) {
lightbox.requestFullscreen();
} else if (lightbox.mozRequestFullScreen) { // Firefox
lightbox.mozRequestFullScreen();
} else if (lightbox.webkitRequestFullscreen) { // Chrome, Safari and Opera
lightbox.webkitRequestFullscreen();
} else if (lightbox.msRequestFullscreen) { // IE/Edge
lightbox.msRequestFullscreen();
}
}

function closeLightbox() {
var lightbox = document.getElementById("lightbox");
lightbox.style.display = "none";

// Exit fullscreen mode if active
if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
if (document.exitFullscreen) {
    document.exitFullscreen();
} else if (document.mozCancelFullScreen) { // Firefox
    document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
    document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { // IE/Edge
    document.msExitFullscreen();
}
}
}

document.addEventListener('keydown', function(event) {
if (event.key === "Escape") {
closeLightbox();
}
});

document.getElementById("lightbox").addEventListener('click', function() {
closeLightbox();
});




// Redirects
function redirectToInstall() {window.location.href = 'install.html';}
function redirectToUpdate() {window.location.href = 'updating.html';}
function redirectToAbout() {window.location.href = 'about.html';}



// Scroll Animation
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
console.log(entry)
if (entry.isIntersecting) {
entry.target.classList.add("show");
} else {
entry.target.classList.remove("show");
}
});
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));