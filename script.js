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
  "Last chance!"];
let noClickCount = 0;

yesBtn.addEventListener('click', () => {
    celebrationSound.play();
    setTimeout(() => {
        window.location.href = 'yes.html';
    }, 300); // Short delay for the sound to play
});

noBtn.addEventListener('mouseover', () => {

    noClickCount++;
    const newYesBtnSize = 1 + noClickCount * 0.2;
    yesBtn.style.transform = `scale(${newYesBtnSize})`;

    const phraseIndex = Math.min(noClickCount, noPhrases.length - 1);
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
