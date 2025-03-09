const images = [
    "image-1 (2).jpg",
    "image-2.jpg",
    "image-3.jpg"
];

let currentIndex = 0;
const slider = document.getElementById("slider");

function showImage(index) {
    slider.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Initialize the slider
showImage(currentIndex);
