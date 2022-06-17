//Faça um programa que leia três número, verifique e mostre o maior deles

var n1 =  -20   //digite um número qualquer
var n2 =  5   //digite um número qualquer
var n3 =  271   //digite um número qualquer

if(n1 > n2 && n1 > n3){
    console.log(`O número ${n1} é maior do que os números ${n2} e ${n3}`)
}else if(n2 > n1 && n2 > n3){
    console.log(`O número ${n2} é maior do que os números ${n1} e ${n3}`)
}else{
    console.log(`O número ${n3} é maior do que os números ${n1} e ${n2}`)
}