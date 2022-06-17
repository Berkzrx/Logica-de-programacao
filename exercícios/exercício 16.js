
// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

// Equação: x = -B² +- raiz(b² - 4ac) / 2a

const baskhara = (ax2, bx, c) => {

    const A = ax2;
    const B = bx;
    const delta = (Math.pow(B, 2)) - (4 * A * c)

    if(A !== 0){
        if(delta < 0){
            return 'Delta é negativo'
        }
        // o método Math.sqrt() recebe um valor por parâmetro e retorna sua raiz quadrada.
        x1 = (-B + Math.sqrt(delta)) / (2*A) 
        x2 = (-B - Math.sqrt(delta)) / (2*A)
        return [x1, x2]
    }else{
        return 'Sua equação é do 1° grau.' 
        // Adicionei essa condicional caso o 'a' seja 0, o que significa que a equação é de 1° grau.
    }
};

console.log(baskhara(0, -3, 10)); // Equação de 1° grau*
console.log(baskhara(3, -5, 12)); // Delta negativo*
console.log(baskhara(1, 3, 2)); // Delta positivo*


// rachei a cuca nesse ;-;