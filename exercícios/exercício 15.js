
// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

// termo: (C) = Capital inicial
//        (T) = Tempo
//        (J) = Juros
//        (I) = Taxa

// Nos Juros Simples, a taxa de juros sempre incide sobre o capital inicial.
// Já em Juros Compostos, a taxa de juros incide sempre sobre o capital atual.

const jurosSimples = (capInicial,taxaJuros,tempoAplicacao) =>{

    return `Montate: R$${capInicial + ((capInicial/100) * taxaJuros) * tempoAplicacao},00`;
};
console.log(jurosSimples(1000,10,3));

// ! -----------------------------------------------------------------------------------------

const jurosCompostos = (capInicial,taxaJuros,tempoAplicacao) =>{
    
    for(i = 1; i <= tempoAplicacao; i++){
        capInicial += (capInicial / 100) * taxaJuros;
    }
    return `Montate: R$${capInicial},00`;
};

console.log(jurosCompostos(1000, 10, 3));