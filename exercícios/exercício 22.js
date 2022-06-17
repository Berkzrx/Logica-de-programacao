
//  Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
//  como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
//  numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
//  3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

const calculadora = (n1,s,n2) => {
    
    switch(s){

        case '+': console.log(`${n1} + ${n2} = ${n1 + n2}`);
        break

        case '-': console.log(`${n1} - ${n2} = ${n1 - n2}`);
        break

        case '*': console.log(`${n1} * ${n2} = ${n1 * n2}`);
        break

        case '/': console.log(`${n1} / ${n2} = ${n1 / n2}`);
        break

        default: console.log('Operações inválidas.');
    }
};

calculadora(10, '+', 7);
calculadora(20, '+', 10);
calculadora(5, '*', 10);
calculadora(100, '/', 4);