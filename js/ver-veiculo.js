document.addEventListener("DOMContentLoaded", function () {
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    const passatempo = localStorage.getItem("passatempo");

    document.getElementById("mensagemTopo").innerText = `${nomeUsuario}, veja as opções para o seu perfil`;

    let carros = [];
    if (passatempo === "shopping") {
        carros = [
            { img: "civic.jpg", info: "Fabricante: Honda, Nome: Civic, Potência: 150 cv, Garantia: 3 anos, Consumo: 9,7 km/l" },
            { img: "corolla.jpg", info: "Fabricante: Toyota, Nome: Corolla, Potência: 144 cv, Garantia: 3 anos, Consumo: 10,6 km/l" }
        ];
    } else {
        carros = [
            { img: "troller.jpg", info: "Fabricante: Ford, Nome: Troller, Potência: 200 cv, Garantia: 3 anos, Consumo: 7,7 km/l" },
            { img: "wrangler.jpg", info: "Fabricante: Jeep, Nome: Wrangler, Potência: 199 cv, Garantia: 2 anos, Consumo: 3,1 km/l" }
        ];
    }

   
    let slideAtual = 0;
    const slideShow = document.getElementById("slideShow");
    const infoSlideShow = document.getElementById("infoSlideShow");

    function mostrarImg() {
        slideShow.src = `img/${carros[slideAtual].img}`;
        infoSlideShow.innerText = carros[slideAtual].info;
        slideAtual = (slideAtual + 1) % carros.length; 
    }

    setInterval(mostrarImg, 2000); 
    mostrarImg(); 

    document.getElementById("mudarPerfil").addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "index.html";
    });
});
