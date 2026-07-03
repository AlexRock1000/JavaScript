var idadeAceso = 15
var container = document.querySelector('.container')

if (idadeAceso >= 18){
    const acessoPermitido = document.createElement('div');
    acessoPermitido.className = "alert alert-success";
    acessoPermitido.innerText = "Acesso permitido";
    container.appendChild(acessoPermitido);}

else{ const acessoNegado = document.createElement('div');
    acessoNegado.className = "alert alert-danger";
    acessoNegado.innerText = "Acesso negado. Idade não atingida.";
    container.appendChild(acessoNegado);}