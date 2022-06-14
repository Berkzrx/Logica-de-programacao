/*Faça um programa para leitura de duas notas parciais de um aluno.

    A mensagem 'Aprovado com Distinção', se a média for igual a dez;
    A mensagem 'Aprovado', se a média alcançada for maior ou igual a sete;
    A mensagem 'Reprovado', se a média for menor do que sete.
*/

var nota_1 = Number(7);//digite alguma nota entre 0 e 10;
var nota_2 = Number(10);//digite alguma nota entre 0 e 10;

var media = (nota_1 + nota_2) / 2;

if(media === 10){
    console.log('APROVADO COM DISTINÇÃO.');
}else if(media >= 7){
    console.log('APROVADO!');
}else{
    console.log('REPROVADO!');
}