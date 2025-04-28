const numero = document.getElementById('numero');
const chutar = document.getElementById('chutar');
const reiniciar = document.getElementById('reiniciar');

const aleatorio = Math.floor(Math.random() * 10); // Número aleatório entre 0 e 9

function chute() {
    const valor = parseInt(numero.value);

    if (isNaN(valor)) {
        alert("Digite um número válido!");
    } else if (valor === aleatorio) {
        alert("Acertou!");
    } else {
        alert("Errou! Tente novamente.");
    }
}

function reiniciarJogo() {
    window.location.reload();
}

chutar.addEventListener("click", chute);
reiniciar.addEventListener("click", reiniciarJogo);
