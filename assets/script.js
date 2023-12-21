const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

arrowLeft.addEventListener("click", function () {
  console.log("Clic sur le bouton gauche");
});

arrowRight.addEventListener("click", function () {
  console.log("Clic sur le bouton droit");
});

const nombreDeSlides = slides.length;

const DotsContainer = document.getElementById("DotsContainer");

for (let i = 0; i < nombreDeSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");

  if (i === 0) {
    dot.classList.add("dot_selected");
  }

  DotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    console.log("Clique sur une diapo");
  });
});

let currentIndex = 0;

const imageElement = document.getElementById("img_banner");
const tagLineElement = document.querySelector("#tagline");
const bulletPoints = document.querySelectorAll(".dot");

function updateCarousel() {
  imageElement.src = "./assets/images/slideshow/" + slides[currentIndex].image;

  tagLineElement.innerHTML = slides[currentIndex].tagLine;

  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

arrowLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Appel initial pour afficher la première diapositive
updateCarousel();
