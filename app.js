let listaDeNumerosSorteados = [];
let LimiteLista = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}



function textoNaTelaInicial() {
    mostrarTextoNaTela ('h1', 'Bem vindo ao jogo do numero secreto');
    mostrarTextoNaTela ('p', 'Digite um número de 1 a 10');
}

textoNaTelaInicial()

function verificarChute() {

    let chute = document.querySelector ('input').value;

    if (chute == numeroSecreto) {
        mostrarTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativa = `Você descobriu o numero aleatório! com ${tentativas} ${palavraTentativa}`
        mostrarTextoNaTela ('p', mensagemtentativa); 
        document.getElementById('reiniciar').removeAttribute('disabled');
     
    } else {
        if (chute > numeroSecreto) {
            mostrarTextoNaTela ('p', 'O número secreto é menor')  
        } else {
            mostrarTextoNaTela ('p', 'O número secreto é maior')  
        }
        tentativas++;
        limparCampo()

    }
}



function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * LimiteLista + 1);
     let quantidadeDeElementosLista = listaDeNumerosSorteados.length;


    if (quantidadeDeElementosLista == LimiteLista) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
 listaDeNumerosSorteados.push(numeroEscolhido);
 console.log(listaDeNumerosSorteados)
 return numeroEscolhido;
  }
}



function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    textoNaTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python']
linguagensDeProgramacao.push('Java', 'Ruby','GoLang')
console.log(linguagensDeProgramacao[2]);



