var nome = "Davi Alexandre"

var body = document.querySelector('body');
var h1 = document.createElement('h1');
var h2 = document.createElement('h2');

h1.innerText = `Quest 04 da Avalição de JavaScript`;
h2.innerText = `Feito por esse que vos fala: ${nome}`;

document.body.appendChild(h1);
document.body.appendChild(h2);