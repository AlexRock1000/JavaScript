// aluno01 = {
//     nome: "Luciana",
//     curso: "Informática",
//     sala: "Laboratório A",
// }

// console.log(aluno01["curso"]);
// aluno01.curso = "História";
// console.log(aluno01["curso"]);

// aluno02 = new Object();
// aluno02.nome = "Carlos";
// aluno02.curso = "English";
// aluno02.sala = "Laboratório B";

// console.log(aluno02);

function novoAluno(alunoNome, alunoCurso, alunoSala){
    return{
        nome: alunoNome,
        curso: alunoCurso,
        sala: alunoSala,
    }
}

aluno01 = novoAluno("Renan", "Geografia", "Laboratório C");
console.log(aluno01.nome + " - " + aluno01.curso + " - " + aluno01.sala);

aluno02 = novoAluno("Eu", "Programação", "MicroWel");
console.log(aluno02.nome + " - " + aluno02.curso + " - " + aluno02.sala);