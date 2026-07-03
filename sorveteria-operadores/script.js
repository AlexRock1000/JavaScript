//Definição das variáveis do pedido
var sabor = "Chocolate";
var quantidadeBolas = 2;
var preçoPorBola = 2.5 // Lá ele!
var preçoTotal = quantidadeBolas * preçoPorBola;
var quantidadeAcompanhamento = 3
var preçoPorAcompanhamento = 0.75
var preçoAcompanhamento = quantidadeAcompanhamento * preçoPorAcompanhamento;

//Trecho responsável pela exibição do pedido
console.log("Olá, seja bem vindo a nossa sorveteria!");
console.log("--------------------");
console.log("Sabor: ", sabor);
console.log("Quantidade de bolas: ", quantidadeBolas); // Lá ele!
console.log("Quantidade de acompanhamneto: ", quantidadeAcompanhamento);
console.log("Valor total: ", preçoTotal + preçoAcompanhamento , "reais");