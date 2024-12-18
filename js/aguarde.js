document.addEventListener("DOMContentLoaded", function () {
    let tempo = Math.floor(Math.random() * 6) + 5; // Entre 5 e 10 segundos
    const spanTempo = document.getElementById("tempo");
    spanTempo.innerText = tempo;

    const interval = setInterval(function () {
        tempo--;
        spanTempo.innerText = tempo;
        if (tempo <= 3) {
            spanTempo.style.color = "red";
        }
        if (tempo === 0) {
            clearInterval(interval);
            window.location.href = "ver-veiculo.html";
        }
    }, 1000);
});
