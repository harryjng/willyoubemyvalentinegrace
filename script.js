const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const container = document.querySelector('.container');
const message = document.getElementById('message');
const celebrationSound = document.getElementById('celebration-sound');

const noPhrases = ["No", "Try Again", "Please?", "Be Nice", "Pretty Please?", "I'll be sad",   "Are you sure?", "Come onnn",
  "Just this once?",
  "Please and thank you",
  "Don't be mean",
  "Give it another thought",
  "That hurts my feelings",
  "Think about it",
  "You wouldn't do that",
  "I believe in you",
  "One more try!",
  "You can do better",
  "I'm begging you",
  "So close!",
  "Wrong answer 😅",
  "Nice try",
  "Not quite",
  "Please reconsider",
  "My heart 💔",
];
let noClickCount = 0;

yesBtn.addEventListener('click', () => {
    celebrationSound.play();
    setTimeout(() => {
        window.location.href = 'yes.html';
    }, 300); // Short delay for the sound to play
});

document.addEventListener('DOMContentLoaded', () => {
    const flowerContainer = document.getElementById('flower-container');
    const flowers = ['🌸', '🌺', '🌹', '🌷', '💐'];

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${(Math.random() * 5) + 5}s`;
        flower.style.fontSize = `${(Math.random() * 1) + 1}rem`;
        flower.style.animationDelay = `${Math.random() * 5}s`;
        flowerContainer.appendChild(flower);

        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }

    for (let i = 0; i < 50; i++) {
        createFlower();
    }
    setInterval(createFlower, 500);
});
noBtn.addEventListener('mouseover', () => {
    noClickCount++;
    const newYesBtnSize = 1 + noClickCount * 0.2;
    yesBtn.style.transform = `scale(${newYesBtnSize})`;

    // Loop through phrases infinitely
    const phraseIndex = noClickCount % noPhrases.length;
    noBtn.textContent = noPhrases[phraseIndex];

    noBtn.style.position = 'absolute';

    const padding = 20;

    // Get container bounds
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width - padding;
    const maxY = containerRect.height - buttonRect.height - padding;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    randomX = Math.max(padding, randomX);
    randomY = Math.max(padding, randomY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
