const container = document.querySelector(".container");
const rows = 4;
const cols = 3;

function getRandomImageUrl(width, height) {
    const url = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
    console.log('Generated image URL:', url);
    return url;
}

function loadImages() {
    console.log('Loading images...');
    const totalImages = rows * cols;
    for (let i = 0; i < totalImages; i++) {
        const imageEl = document.createElement("img");
        imageEl.src = getRandomImageUrl(300, 300);
        imageEl.alt = 'Random image from Picsum';
        imageEl.onerror = function() {
            console.error('Failed to load image:', this.src);
            this.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
        };
        imageEl.onload = function() {
            console.log('Image loaded successfully:', this.src);
        };
        container.appendChild(imageEl);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    loadImages();
});