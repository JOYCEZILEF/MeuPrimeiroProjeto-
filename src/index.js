// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
const idade = 25;
//console.log(idade); 
//*******Resposta:Não podemos reatribuir um valor à variável que é declarada com const. Só podemos declarar uma vez.

//O que acontece ao chamar a let x dentro e fora do escopo? 

//*******Resposta:Let limita o escopo de uma variável declarada somente para aquela expressão

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//*******Resposta:Sim

//Nesse caso as chaves delimitam o nosso escopo
//*******Resposta: Sim, as chaves delimitam o escopo.


{
let x = 10;
   // console.log(x); 
}
// console.log(x);

//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

// console.log(x);
// console.log(y);

//*******Resposta:A única diferença entre as duas é o escopo em que essas variáveis existem, ariáveis declaradas com var têm escopo global ou de função, enquanto variáveis declaradas com let têm escopo de bloco.


//O que acontece nessa declaração, explique sobre o Hoisting

//console.log(a); 
var a = 5;
console.log(b);
//let b = 10;

//*******Resposta:O Hoisting é o comportamento padrão de mover as declarações para o topo do seu escopo antes da execução do código, não importa se o escopo seja global ou local.


//No código abaixo apresenta um erro, qual?

// var x = 5;
// var x = 10;
//  console.log(x); 

// let y = 15;
// let y = 20; 
// console.log(y); 

// *******Resposta: Há erro de sintaxe, pois a variável y já foi declarada.

///Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = 'Joyce'

//sua lógica para pegar a primeira letra 
const letraInicial = nomeCompleto[0];
console.log(letraInicial)