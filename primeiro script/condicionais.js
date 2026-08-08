var nota = 10;
var faltas = 10;

if(nota == 10 && faltas < 10){
    console.log("Aluno aprovado com nota maxina!")
} else if(nota >= 5 && nota <= 9 && faltas < 10){
    console.log("Aluno aprovado!");
}else{
    console.log("Aluno reprovado");
}