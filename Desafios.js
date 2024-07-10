/*
Se for final de semana alerta uma mensagem, e se for semana outra mensagem
*/
let finaisDeSemana = ["Domingo", "Sábado"];
let diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
var diaDaSemana = prompt("Qual é o dia da semana?")

if (finaisDeSemana.includes(diaDaSemana)){
    alert("Bom fim de semana!");
}else{
    if (diasDaSemana.includes(diaDaSemana)){
        alert("Boa semana!");
    }else{
        alert("Houve um erro, não encontrei o digitado");
    }
}


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