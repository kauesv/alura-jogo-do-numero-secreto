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



// DESAFIOS
  
/*
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
*/
function imc(altura, peso){
    let resultado = peso / altura;
    let imc = `${resultado.toFixed(2)}kg/m2`;
    return imc
  }
  
console.log(imc(1.75, 65));


/*
Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
*/
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

let numero = 5;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);


/*
Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$5,40.
*/
function dolar(dolar, cotacao){
let result = dolar * cotacao
return result;
}

let cotacao = 5.40;
console.log(`R$${dolar(5, cotacao)}`);


/*
Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
*/
function salaRetangular(altura, largura){
area = largura * altura;
perimetro = (2 * largura + 2 * altura);
return `Área: ${area} m²\nPerímetro: ${perimetro} m`;
}

console.log(salaRetangular(5, 10));


/*
Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
*/
function salaRedonda(raio, pi){
area = pi * (raio * raio);
perimetro = 2* pi * raio;
return `Área: ${area} m²\nPerímetro: ${perimetro.toFixed(2)} m`;
}

console.log(salaRedonda(10, 3.14));


/*
Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/
function tabuada(numero){
    json = {}
    for (let i= 1; i <= 10; i++){
        linha = `${i}x${numero}`
        json[linha] = i * numero;
    }
    console.log(json)
    return `Tabuada do ${numero}: ${JSON.stringify(json)}`
}

console.log(tabuada(5));