

const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");
const totalImages = images.length;
const imagesPerSlide = 3;
let index = 0;
const imageWidth = 240; // Ajustado a 4:5

function moverCarrusel(step) {
    index += step;

    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(${-index * imageWidth}px)`;

    // Reinicio infinito
    setTimeout(() => {
        if (index >= totalImages) {
            track.style.transition = "none";
            index = 0;
            track.style.transform = `translateX(${-index * imageWidth}px)`;
        }
        if (index < 0) {
            track.style.transition = "none";
            index = totalImages - imagesPerSlide;
            track.style.transform = `translateX(${-index * imageWidth}px)`;
        }
    }, 500);
}
