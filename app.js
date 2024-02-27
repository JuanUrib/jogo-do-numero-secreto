let listaDeNumerosSorteados = [];
let numeroLimite = 30;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});

    //let titulo = document.querySelector("h1");
    //titulo.innerHTML = "Jogo do número secreto";

    //let paragrafo = document.querySelector("p");
    //paragrafo.innerHTML = "Escolha um número entre 1 e 10";


}

function exibirMensagemInicial () {

    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();

function verificarChute () {

    let chute = document.querySelector("input").value;
    console.log(numeroSecreto);

    if (chute==numeroSecreto) {

        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else{
        if(chute > numeroSecreto) {

            exibirTextoNaTela("h1", "Errou, tente denovo");
            exibirTextoNaTela("p", "o número é menor que o chute");

        }else {

            exibirTextoNaTela("h1", "Errou, tente denovo");
            exibirTextoNaTela ("p", "o número secreto é maior que o chute");
        }
        tentativas++;
        limparCampo();
    }  
   
}

function gerarNumeroAleatorio() {

    let numeroEscolhido =  parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value= "";

}

function reiniciarJogo(){

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}