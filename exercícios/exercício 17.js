
// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

const divPor3 = (n) => {

    if(n === parseInt(n)){

        const answer = n / 3;

        // o 'Number.isInteger() recebe um valor e verifica se é um inteiro, retornando true or false.
        if(Number.isInteger(answer) === true){
            console.log('TRUE: Seu número é divisível por 3!');
        }else{
            console.log('FALSE: Seu número não é divisível por 3!');
        }   
        
    }else{
        console.log('Insira um número inteiro!');
    }
}

divPor3(6); // retorna TRUE
divPor3(10); // retorna FALSE
divPor3(2.5); // retorna que o valor não é um inteiro