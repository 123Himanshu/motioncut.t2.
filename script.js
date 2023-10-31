// Get the lightbox, close button, and zoom-out button
var lightbox = document.getElementById("lightbox");
var closeButton = document.getElementById("close-lightbox");
var zoomOutButton = document.getElementById("zoom-out");

// Get all grid items
var gridItems = document.querySelectorAll(".grid-item");

// Add click event listeners to grid items
gridItems.forEach(function(item) {
    item.addEventListener("click", function() {
        var img = item.querySelector("img");
        displayImage(img.src);
    });
});

// Display image in the lightbox
function displayImage(src) {
    var lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "block";
    lightboxImg.src = src;
    lightboxImg.style.maxWidth = "90%"; // Set the maximum width for the wider image
}

// Close the lightbox
closeButton.addEventListener("click", function() {
    lightbox.style.display = "none";
});

// Zoom out the image
zoomOutButton.addEventListener("click", function() {
    var lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.style.transform = "scale(0.8)";
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
