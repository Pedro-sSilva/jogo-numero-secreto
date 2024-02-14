let listaNumerosSorteados = [];
let numeroMax = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quantElementosLista = listaNumerosSorteados.length;

    if (quantElementosLista == numeroMax) {
        listaNumerosSorteados = [];
    };

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    };
};

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMax}`);
};

exibirMensagemInicial();

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        };
        tentativas++;
        limparCampo();
    };
};



// DESAFIOS DA AULA 2

// Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo(){
    console.log('Olá, mundo!');
};

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function ola(nome) {
    console.log(`Olá, ${nome}`);
};

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro(num) {
    return num * 2;
};

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(num1, num2, num3) {
    return (num1 + num2 + num3)/3;
};

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    };
};

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function quadrado(num) {
    return num * num;
};

// DESAFIOS DA AULA 3

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function IMC(altura, peso) {
    return peso / (altura * altura);
};

///Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(num) {
    let controle = num;
    let resultado = 1;

    while (controle != 1) {
        resultado = resultado * controle;
        controle--;
    };

    return resultado;
};

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converte(dolar) {
    return dolar * 4.80;
};

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function areaPerim(altura, largura) {
    console.log(`A área da parede é: ${altura * largura}`);
    console.log(`O perímetro da parede é: ${(altura * 2) + (largura * 2)}`);
};

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaPermCirc(raio) {
    let pi = 3.14;
    console.log(`A área do círculo é: ${pi * (raio * raio)}`);
    console.log(`O perímetro do círculo é: ${2 * pi * raio}`);
}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(num) {
    let controle = 1;

    while (controle != 11) {
        console.log(`${controle} X ${num} = ${controle * num}`);
        controle++;
    };
};

//DESAFIO DA AULA 4

// Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomes = ['Pedro', 'Letícia', 'Leonardo'];
console.log(nomes[0]);

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

console.log(nomes[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

console.log(nomes[nomes.length - 1]);
