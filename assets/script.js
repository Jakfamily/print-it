// Définition des diapositives
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

// Récupération des éléments HTML pour les flèches gauche et droite
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

// Gestionnaire d'événement pour la flèche gauche
arrowLeft.addEventListener("click", function () {
  console.log("Clic sur le bouton gauche");
});

// Gestionnaire d'événement pour la flèche droite
arrowRight.addEventListener("click", function () {
  console.log("Clic sur le bouton droit");
});

// Calcul du nombre total de diapositives
const nombreDeSlides = slides.length;

// Récupération du conteneur des points (dots)
const DotsContainer = document.getElementById("DotsContainer");

// Création des points (dots) et ajout au conteneur
for (let i = 0; i < nombreDeSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");

  // Ajout de la classe "dot_selected" au premier dot
  if (i === 0) {
    dot.classList.add("dot_selected");
  }

  DotsContainer.appendChild(dot);
}

// Sélection de tous les points (dots) créés
const dots = document.querySelectorAll(".dot");

// Gestionnaire d'événement pour chaque point (dot)
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    console.log("Clique sur une diapo");
  });
});

// Initialisation de l'index courant
let currentIndex = 0;

// Récupération des éléments image et tagline
const imageElement = document.getElementById("img_banner");
const tagLineElement = document.querySelector("#tagline");

// Récupération de tous les points (dots)
const bulletPoints = document.querySelectorAll(".dot");

// Fonction pour mettre à jour le carousel
function updateCarousel() {
  // Mise à jour de l'image et du tagline en fonction de l'index courant
  imageElement.src = "./assets/images/slideshow/" + slides[currentIndex].image;
  tagLineElement.innerHTML = slides[currentIndex].tagLine;

  // Mise à jour des classes des points (dots) en fonction de l'index courant
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Gestionnaire d'événement pour la flèche droite
arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  // Appel de la fonction pour mettre à jour le carousel
  updateCarousel();
});

// Gestionnaire d'événement pour la flèche gauche
arrowLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  // Appel de la fonction pour mettre à jour le carousel
  updateCarousel();
});

// Appel initial de la fonction pour afficher la première diapositive
updateCarousel();
