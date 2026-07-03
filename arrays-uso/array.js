var estoqueProdutos = ["Notebook Dell", "Câmera Canon", "Xbox Series X", "Playstation 5", "Nintendo Switch"]
var estoqueQuantidade = [10, 5, 13, 15]

// estoqueProdutos.forEach(function(produto, index) {
//     var quantidade = estoqueQuantidade[index];
//     console.log("O produto", produto, "ainda tem", quantidade, "unidades em estoque.");
// });

// stringProdutos = estoqueProdutos.join(" - ")
// console.log(stringProdutos)
// stringQuantidade = estoqueQuantidade.join(" - ")
// console.log(stringQuantidade)

// ultimoProduto = estoqueProdutos.pop()
// console.log("Ultimo produto:", ultimoProduto);
// console.log(estoqueProdutos)

// console.log(estoqueProdutos)
novosProdutos = estoqueProdutos.push("Iphone 14", "Macbool Air", "Metendo")
// console.log(estoqueProdutos)
novoEstoque = estoqueQuantidade.push(2, 6, 1, 4)

estoqueProdutos.forEach(function(produto, index){
    quantidade = estoqueQuantidade[index]
    console.log("O produto", produto, "ainda tem", quantidade, "unidades em estoque.");
});