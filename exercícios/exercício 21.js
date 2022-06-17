
// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const DiaDaSemana = (dia) => {

    const dias = ['','domingo','segunda','terça','quarta','quinta','sexta','sábado'];

    switch(dia){
        case 1: 
        case 7:
            return `${dias[dia]}: Fim de semana.`;
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
            return `${dias[dia]}: Dia útil.`;
        default: return 'Dia inválido';
    }
};
console.log(DiaDaSemana(1));
console.log(DiaDaSemana(2));
console.log(DiaDaSemana(3));
console.log(DiaDaSemana(4));
console.log(DiaDaSemana(5));
console.log(DiaDaSemana(6));
console.log(DiaDaSemana(7));
console.log(DiaDaSemana('março'));