
// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:

// Plano | Aumento
// A     |  10%
// B     |  15%
// C     |  20%

// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const calcularPlano = (plano, salario) => {

    const porcentagem = salario / 100;

    switch(plano){
        case 'A': return`Plano ${plano}. Seu salário atual é: R$${salario + (porcentagem * 10)},00`; 
        break

        case 'B': return`Plano ${plano}. Seu salário atual é: R$${salario + (porcentagem * 15)},00`;
        break 

        case 'C': return `Plano ${plano}. Seu salário atual é: R$${salario + (porcentagem * 20)},00`;
        break

        default: return 'Plano inválido.'
    }

};

console.log(calcularPlano('A', 1000));
console.log(calcularPlano('B', 1000));
console.log(calcularPlano('C', 1000));
console.log(calcularPlano('F', 1000));