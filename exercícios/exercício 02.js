
// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

const triangulo = (a,b,c) => {

    if((a < b + c) && (b < a + c) && (c < b + a)){
        if(a === b && a === c && b === c){
            console.log(`Triângulo enquilátero`);
        }else if(a === b || a === c || b === c){
            console.log(`Triângulo Isóceles`);
        }else{
            console.log(`Triângulo Escaleno`);
        }
    }else{
        console.log('Coloque medidas corretas.');
    };
};

triangulo(4,4,4);
triangulo(4,4,2);
triangulo(3,4,5);
triangulo(100,4,2);
