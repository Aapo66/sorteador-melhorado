function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de > ate || quantidade > (ate - de + 1)){
        alert("Por favor não coloque um numero minimo menor que o maximo e nao coloque uma quantidade inferior ao intervalo escolhido");
        reiniciar()
    } else {
        let sorteados = [];
        let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    botaoReiniciar.classList.replace("container__botao-desabilitado", "container__botao");
    } 
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    botaoReiniciar.classList.replace("container__botao", "container__botao-desabilitado");
}