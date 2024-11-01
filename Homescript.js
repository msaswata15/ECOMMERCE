// Countdown Timer for Flash Sales
function startCountdown() {
    const endTime = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); // 3 days countdown

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.querySelector(".countdown").innerText = "Sale Ended";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);
