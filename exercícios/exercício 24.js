
// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

const numeroEscrito = (n) => {

    switch(n){
        case 1: return 'Um'; 
        case 2: return 'Dois'; 
        case 3: return 'Três';  
        case 4: return 'Quatro';  
        case 5: return 'Cinco';  
        case 6: return 'Seis';  
        case 7: return 'Sete';  
        case 8: return 'Oito';  
        case 9: return 'Nove';  
        case 10: return 'Dez';  

        default: return 'Número inválido';
    }
};

console.log(numeroEscrito(1));
console.log(numeroEscrito(2));
console.log(numeroEscrito(3));
console.log(numeroEscrito(4));
console.log(numeroEscrito(5));
console.log(numeroEscrito(6));
console.log(numeroEscrito(7));
console.log(numeroEscrito(8));
console.log(numeroEscrito(9));
console.log(numeroEscrito(10));
console.log(numeroEscrito(Math.PI));