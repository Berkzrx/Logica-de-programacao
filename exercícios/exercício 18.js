
// Um número é bissexto por 4 quando a sua dezena é divisível por 4. Por exemplo, 1988 é divisível por 4,
// pois 88:4 = 22. Portanto, os seguintes anos são bissextos: 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016,
// 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, ...

// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

const bissexto = (n) => {
    
    let nArray = ((n).toString()).split(''); 
    let soma = Number(nArray[nArray.length -2] + nArray[nArray.length -1]);
    let div4 = soma / 4
    let temrinado00 = n / 400;
    if(Number.isInteger(div4) && Number.isInteger(temrinado00)){
        console.log(`TRUE: ${n} é um ano bissexto!`);
    }else{
        console.log(`FALSE: ${n} NÃO é um ano bissexto!`);
    }
    
};

bissexto(2400); // ano bissexto!
bissexto(2015); // ano não bissexto!