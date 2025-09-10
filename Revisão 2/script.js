// Entrada de Dados
// 1 - Boas Vindas
function boasVindas() {
  let nome = prompt("Digite seu nome:");
  alert(nome ? "Bem-vindo(a), " + nome + "!" : "Nome não informado!");
}
boasVindas();

// 2 - Mostrando valor digitado
function mostrarValorDigitado() {
  let texto = prompt("Digite um texto:");
  alert(texto ? "Você digitou: " + texto : "Nenhum texto digitado!");
}
mostrarValorDigitado();

// Conversão de Tipos
// 1 - Soma de valores
function somaValores() {
  let num1 = Number(prompt("Digite o primeiro número:"));
  let num2 = Number(prompt("Digite o segundo número:"));
  alert(!isNaN(num1) && !isNaN(num2) ? "A soma é: " + (num1 + num2) : "Por favor, digite números válidos!");
}
somaValores();

// 2 - Concatenação
function concatenarNumero() {
  let numero = prompt("Digite um número:");
  alert(!isNaN(numero) ? "Seu número como texto: " + numero + " é incrível!" : "Por favor, digite um número válido!");
}
concatenarNumero();

// 3 - Maioridade
function verificarMaioridade() {
  let idade = Number(prompt("Digite sua idade:"));
  alert(!isNaN(idade) ? (idade >= 18 ? "Você é maior de idade!" : "Você é menor de idade!") : "Por favor, digite uma idade válida!");
}
verificarMaioridade();

// Funções de Texto
// 1 - Manipulando Texto
function manipularTexto() {
  let frase = prompt("Digite uma frase:");
  if (frase) {
    alert("Quantidade de caracteres: " + frase.length +
          "\nMaiúsculas: " + frase.toUpperCase() +
          "\nMinúsculas: " + frase.toLowerCase() +
          "\nSubstituindo 'estudo' por 'aprendizado': " + frase.replace("estudo", "aprendizado") +
          "\nContém 'javascript'?: " + (frase.toLowerCase().includes("javascript") ? "Sim" : "Não") +
          "\nCaractere na posição 5: " + (frase[5] || "Posição inexistente"));
  } else {
    alert("Nenhuma frase digitada!");
  }
}
manipularTexto();

// Funções Matemáticas
// 1 - Adivinhar o número
function adivinharNumero() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  let tentativa = Number(prompt("Adivinhe o número (1 a 10):"));
  alert(!isNaN(tentativa) ? (tentativa === numeroAleatorio ? "Parabéns, você acertou!" : "Errado! O número era " + numeroAleatorio) : "Por favor, digite um número válido!");
}
adivinharNumero();

// 2 - Arredondando valores
function arredondarValores() {
  let numero = Number(prompt("Digite um número decimal:"));
  if (!isNaN(numero)) {
    alert("Arredondado para cima: " + Math.ceil(numero) +
          "\nArredondado para baixo: " + Math.floor(numero) +
          "\nArredondado normalmente: " + Math.round(numero));
  } else {
    alert("Por favor, digite um número válido!");
  }
}
arredondarValores();

// 3 - Manipulando números
function manipularNumeros() {
  let numeros = [];
  for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Digite o número " + (i + 1) + ":"));
    if (!isNaN(num)) {
      numeros.push(num);
    } else {
      alert("Número inválido, tente novamente!");
      i--;
    }
  }
  alert("Maior número: " + Math.max(...numeros) +
        "\nMenor número: " + Math.min(...numeros));
}
manipularNumeros();

// 4 - Novos valores
function novosValores() {
  let numero = Number(prompt("Digite um número:"));
  if (!isNaN(numero)) {
    alert("Valor absoluto: " + Math.abs(numero) +
          "\nElevado a 4: " + Math.pow(numero, 4) +
          "\nRaiz quadrada: " + Math.sqrt(Math.abs(numero)));
  } else {
    alert("Por favor, digite um número válido!");
  }
}
novosValores();

// Datas
// 1 - Mostrando a data
function mostrarData() {
  let hoje = new Date();
  console.log("Data atual: " + hoje.toLocaleDateString("pt-BR"));
}
mostrarData();

// 2 - Dia do aniversário
function diasParaAniversario() {
  let dia = Number(prompt("Digite o dia do seu aniversário (1-31):"));
  let mes = Number(prompt("Digite o mês do seu aniversário (1-12):")) - 1;
  if (!isNaN(dia) && !isNaN(mes) && dia >= 1 && dia <= 31 && mes >= 0 && mes <= 11) {
    let hoje = new Date();
    let ano = hoje.getFullYear();
    let aniversario = new Date(ano, mes, dia);
    if (aniversario < hoje) {
      aniversario.setFullYear(ano + 1);
    }
    let diferenca = Math.ceil((aniversario - hoje) / (1000 * 60 * 60 * 24));
    alert("Faltam " + diferenca + " dias para o seu aniversário!");
  } else {
    alert("Por favor, digite uma data válida!");
  }
}
diasParaAniversario();