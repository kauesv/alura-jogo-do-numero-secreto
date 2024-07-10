// exibe texto em elementos
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    //<script src="https://code.responsivevoice.org/responsivevoice.js"></script>
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.1});
}

//Limpa o campo do chute
function limparCampo(){
    //O "chute" ja esta na memoria, então não vai dar erro.
    chute = document.querySelector("input");
    chute.value = '';
}

//exibe as mensagens iniciais do jogo
function exibeMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número Secreto");
    exibirTextoNaTela("p", `Escolha um número de ${numeroMinimo} e ${numeroMaximo}`);
}

//Reinicia o jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
    limparCampo();
    tentativas = 1;
    exibeMensagemInicial();

    //desativa a reinicializacao e ativa o botao de chute
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');
}

//Ação do botão "Chute"
function verificarChute(){
    let chute = document.querySelector('input').value;

    // numeroSecreto esta na memoria, por isso não precisou receber o parametro
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!');

        // Operador ternário - se for maior que 1 plural se não singular
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);

        //Iniciar um novo jogo, no HTML conseguimos localizar o id do botao
        document.getElementById('reiniciar').removeAttribute('disabled');

        //desativa o chute
        document.getElementById('chute').setAttribute('disabled', true);
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

// Gera um numero aleatorio
function gerarNumeroAleatorio(numeroMinimo, numeroMaximo) {
    let numerogerado = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
    console.log(numerogerado);
    return numerogerado;
}

// Define o minimo e o máximo
let numeroMinimo = 1;
let numeroMaximo = 30;
let tentativas = 1;

// Exibe as mensagens no HTML
exibeMensagemInicial();

// libera o botao de chute
document.getElementById('chute').removeAttribute('disabled');

// recebe um numero secreto
let numeroSecreto = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
