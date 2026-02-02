document.addEventListener('DOMContentLoaded', () => {
    const continueBtn = document.getElementById('continue-btn');
    const video = document.getElementById('background-video');
    const overlay = document.getElementById('overlay');

    overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');
        video.play();
    });

    continueBtn.addEventListener('click', () => {
        document.body.style.animation = 'fadeOut 1s ease-in-out forwards';
        setTimeout(() => {
            window.location.href = 'valentine-question.html';
        }, 1000);
    });

    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${(Math.random() * 5) + 5}s`;
            heart.style.fontSize = `${(Math.random() * 1.5) + 1}rem`;
            heartsContainer.appendChild(heart);

            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }, i * 300);
    }

    const sparkleContainer = document.getElementById('sparkle-container');
    for (let i = 0; i < 100; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 4}s`;
        sparkleContainer.appendChild(sparkle);
    }
});