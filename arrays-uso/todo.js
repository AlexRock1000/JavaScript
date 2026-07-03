//Selecionando elementos com o querySelector
var inputTarefas = document.querySelector('#inputTarefa');
var btnAdicionarTarefa = document.querySelector('#btnAdicionarTarefa');

//Evento para o botão "Adicionar"
btnAdicionarTarefa.addEventListener('click', adicionarTarefa)

//Função responsável por criar o elemento responsável peça exibição das tarefas
function adicionarTarefa(){
    var textoInput = inputTarefa.value;
    if (textoInput !==''){
        var caixaTarefa = document.createElement('div');
        caixaTarefa.className = 'alert alert-secondary mt-1 mb-1 d-flex';

        //Adicionar o texto da tarefa
        caixaTarefa.innerHTML = textoInput;
        
        //Cria o botão de remoção
        var botaoRemover = document.createElement('button');
        botaoRemover.className = 'btn btn-danger btn-sm ms-auto';
        botaoRemover.innerHTML = 'Remover';

        //Adicionar o evento de clipe para a tarefa
        botaoRemover.addEventListener('click', function(){
            containerTarefa.removeChild(caixaTarefa);
        })

        var containerTarefa = document.querySelector('.container');
        containerTarefa.appendChild(caixaTarefa);
        caixaTarefa.appendChild(botaoRemover);
        inputTarefa.value = '';
        inputTarefa.focus();
    }
}