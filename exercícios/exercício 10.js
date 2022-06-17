/*Faça um programa que verifique (usando if e else) se uma letra digitada é "F" ou "M". Conforme a 
etra escrever F - Feminino, M - masculino, Sexo inválido. */


var sexo = 'F' //Digite F ou f para retornar que o sexo é FEMININO, digite M ou m para retornar sexo MASCULINO, ou SEXO INVÁLIDO.

if(sexo === 'F' || sexo === 'f'){
    console.log('sexo FEMININO');
}else if(sexo === 'M' || sexo ==='m'){
    console.log('sexo MASCULINO');
}else{
    console.log('sexo INVÁLIDO');
}