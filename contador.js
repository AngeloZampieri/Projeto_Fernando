window.onload = function () {
    const timerElement = document.getElementById('timer');
    

    const endTime = Date.now() + (10 * 60 * 1000);

    const interval = setInterval(function () {
        const remainingTime = endTime - Date.now();

        if (remainingTime > 0) {
            const totalSeconds = Math.floor(remainingTime / 1000);
            const minutos = Math.floor(totalSeconds / 60);
            const segundos = totalSeconds % 60;
            
            const displayMinutos = String(minutos).padStart(2, '0');
            const displaySegundos = String(segundos).padStart(2, '0');

            timerElement.textContent = `${displayMinutos}:${displaySegundos}`;
        } else {
            clearInterval(interval);
            timerElement.textContent = "Fim!";
        }
    }, 1000);
};