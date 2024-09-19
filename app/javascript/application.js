// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// // script.js

const card = document.getElementById('pokemonCard');
const imageContainer = document.querySelector('.image-container');
const glow = document.querySelector('.glow'); // Sélectionner l'élément glow

// Mouvement 3D de la carte
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // Position X normalisée (0 à 1)
    const y = (e.clientY - rect.top) / rect.height; // Position Y normalisée (0 à 1)

    // Rotation de la carte en fonction de la souris
    const rotateX = (y - 0.5) * 60; // Amplitude de rotation sur l'axe X
    const rotateY = (0.5 - x) * 60; // Amplitude de rotation sur l'axe Y

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Synchronisation de l'effet holographique avec le mouvement de la souris
    const holoX = x * 100; // Calcul de la position X du halo
    const holoY = y * 100; // Calcul de la position Y du halo

    // Mise à jour des variables CSS pour l'effet holographique
    imageContainer.style.setProperty('--x', `${holoX}%`);
    imageContainer.style.setProperty('--y', `${holoY}%`);
    glow.style.setProperty('--x', `${holoX}%`); // Mise à jour de la position X du glow
    glow.style.setProperty('--y', `${holoY}%`); // Mise à jour de la position Y du glow

    // Ajout de la classe pour appliquer le style holographique
    imageContainer.classList.add('holographic');
    glow.classList.add('active-glow'); // Ajout d'une classe pour activer l'effet de glow
});

card.addEventListener('mouseleave', () => {
    // Réinitialiser la position de la carte lorsque la souris sort
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = 'cubic-bezier(0.5, 1.5, 0.8, 1.3) 0.5s';


    // Retirer l'effet holographique en faisant disparaître progressivement le halo
    imageContainer.classList.remove('holographic');
    glow.classList.remove('active-glow'); // Retirer la classe du glow
});




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
