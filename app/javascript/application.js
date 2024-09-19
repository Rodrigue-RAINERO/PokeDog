// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// // script.js

const card = document.getElementById('pokemonCard');
const imageContainer = document.querySelector('.image-container');
const glow = document.querySelector('.glow'); // Sélectionner l'élément glow

// Fonction pour mettre à jour la transformation de la carte
function updateCardTransform(x, y) {
    const rotateX = (y - 0.5) * 60; // Amplitude de rotation sur l'axe X
    const rotateY = (0.5 - x) * 60; // Amplitude de rotation sur l'axe Y

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const holoX = x * 100; // Calcul de la position X du halo
    const holoY = y * 100; // Calcul de la position Y du halo

    imageContainer.style.setProperty('--x', `${holoX}%`);
    imageContainer.style.setProperty('--y', `${holoY}%`);
    glow.style.setProperty('--x', `${holoX}%`); // Mise à jour de la position X du glow
    glow.style.setProperty('--y', `${holoY}%`); // Mise à jour de la position Y du glow

    imageContainer.classList.add('holographic');
    glow.classList.add('active-glow'); // Ajout d'une classe pour activer l'effet de glow
}

// Gestion des mouvements de souris
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // Position X normalisée (0 à 1)
    const y = (e.clientY - rect.top) / rect.height; // Position Y normalisée (0 à 1)

    updateCardTransform(x, y);
});

// Gestion des mouvements tactiles
card.addEventListener('touchmove', (e) => {
    e.preventDefault(); // Prévenir le défilement de la page lors du toucher
    const rect = card.getBoundingClientRect();
    const touch = e.touches[0]; // Prendre le premier doigt
    const x = (touch.clientX - rect.left) / rect.width; // Position X normalisée (0 à 1)
    const y = (touch.clientY - rect.top) / rect.height; // Position Y normalisée (0 à 1)

    updateCardTransform(x, y);
}, { passive: false }); // La passivité est définie sur false pour permettre e.preventDefault()

// Réinitialiser la carte lorsque la souris ou le toucher sortent
function resetCard() {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = 'cubic-bezier(0.5, 1.5, 0.8, 1.3) 0.5s';

    imageContainer.classList.remove('holographic');
    glow.classList.remove('active-glow'); // Retirer la classe du glow
}

card.addEventListener('mouseleave', resetCard);
card.addEventListener('touchend', resetCard);





// const card = document.querySelectorAll('.card-container');

// card.forEach(el => {
//     el.addEventListener('mousemove', (e) => {

//         let elRect = el.getBoundingClientRect();

//         let x = e.clientX - elRect.x;
//         let y = e.clientY - elRect.y;

//         let midCardWidth = elRect.width / 2;
//         let midCardHeight = elRect.height / 2;

//         let angleY = -(x - midCardWidth) / 8;
//         let angleX = (y - midCardHeight) / 8;

//         let glowX = x / elRect.width * 100;
//         let glowY = y / elRect.height * 100;

//         el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
//         el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
//         el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(184, 196, 211), transparent)`;


//     });

//     el.addEventListener('mouseleave', () => {
//         el.children[0].style.transform = `rotateX(0deg) rotateY(0deg)`;
//         el.children[1].style.transform = `rotateX(0deg) rotateY(0deg)`;
//         el.children[1].style.background = 'none';
//     });

// });
