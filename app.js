//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Bem vindo ao numero secreto";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Digite um número de 1 a 10";

let numeroSecreto = 1;
let tentativas = 1;


function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mostrarTextoNaTela ('h1', 'Bem vindo ao jogo do numero secreto');
mostrarTextoNaTela ('p', 'Digite um número de 1 a 10');

function gerarNumeroAleatorio() {

    return parseInt(Math.random() * 10 + 1)
}



function verificarChute() {

    let chute = document.querySelector ('input').value;

    if (chute == numeroSecreto) {
        mostrarTextoNaTela ('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativa = `Você descobriu o numero aleatório! com ${tentativas} ${palavraTentativa}`
        mostrarTextoNaTela ('p', mensagemtentativa)   
        document.getElementById('reiniciar').removeAttribute('disabled')
     
    } else {
        if (chute > numeroSecreto) {
            mostrarTextoNaTela ('p', 'O número secreto é menor')  
        } else {
            mostrarTextoNaTela ('p', 'O número secreto é maior')  
        }
        tentativas++;
        limparCampo()
    }
    
    console.log("O Botão foi clicado!");
    console.log(numeroSecreto);
    console.log(chute == numeroAleatorio);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}