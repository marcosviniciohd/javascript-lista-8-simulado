document.getElementById("verOpcoes").addEventListener("click", function () {
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value;
    const passatempo = document.getElementById("passatempo").value;

    if (!nome) {
        alert("Preencha o campo nome");
        return;
    }

    if (!idade || idade < 1 || idade > 120) {
        alert('Idade de ser um número inteiro entre 1 e 120');
        return;
    }

    if (passatempo === "1") {
        alert("Por favor, selecione um passatempo.");
        return;
    }

    localStorage.setItem("nomeUsuario", nome);
    localStorage.setItem("passatempo", passatempo);
    window.location.href = "aguarde.html";
});
