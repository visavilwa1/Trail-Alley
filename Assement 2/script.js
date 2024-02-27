 // Countdown Timer
        const countdownDate = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now

        const countdownElement = document.getElementById('countdown');
        const countdownModalElement = document.getElementById('countdownModal');

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${minutes}m ${seconds}s`;
            countdownModalElement.innerHTML = `${minutes}m ${seconds}s`;

            if (distance < 0) {
                clearInterval(countdownInterval);
                countdownElement.innerHTML = 'EXPIRED';
                countdownModalElement.innerHTML = 'EXPIRED';
            }
        }

        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();

        // Modal
        function openModal() {
            const modal = document.getElementById('myModal');
            modal.style.display = 'flex';
        }

        function closeModal() {
            const modal = document.getElementById('myModal');
            modal.style.display = 'none';
        }

        // Close modal if clicked outside the content
        window.onclick = function (event) {
            const modal = document.getElementById('myModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    