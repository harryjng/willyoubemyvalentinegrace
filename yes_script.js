document.addEventListener('DOMContentLoaded', () => {
    const countdownDate = new Date(`February 11, ${new Date().getFullYear()} 21:00:00`).getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    let previousValues = {};

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = "<h2>I'm here! ❤️</h2>";
            clearInterval(interval);
            return;
        }

        const values = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };

        const elements = { days: daysEl, hours: hoursEl, minutes: minutesEl, seconds: secondsEl };

        for (const key in values) {
            if (values[key] !== previousValues[key]) {
                elements[key].textContent = values[key] < 10 ? '0' + values[key] : values[key];
                elements[key].classList.add('animate');
                setTimeout(() => elements[key].classList.remove('animate'), 490);
            }
        }

        previousValues = values;
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
});
