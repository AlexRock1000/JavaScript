// var numero = 1;

// console.log("Sequência numérica esando while");

// while(numero <= 120){
//     console.log(numero);
//     numero *= 2;
// }

// console.log("---");

// console.log("Sequência numérica usando for");
// for(var numero = 4; numero <= 1024; numero *= 4){
//     console.log(numero);
// }

var investimentoInicial = 1000;
var taxaJurosAnual = 0.05;
var valorInvestido = investimentoInicial

console.log("Calculadora de Investimentos");
for(var ano = 1; ano <= 5; ano++){
    valorInvestido += valorInvestido * taxaJurosAnual;
    console.log("Ano: ", ano, " - Valor: R$", valorInvestido);
}