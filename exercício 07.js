
// Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, quando divididos por 11 produzam resto igual a 2

let index = 1000;

while(index >= 1000 && index <= 2000){
    
    if(index % 11 === 2){
        console.log(index);
    };

    index++;
}
