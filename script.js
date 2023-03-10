const students = [{
name: "João",
firstNote: 10,
secondNote: 10,

},
{
name: "Luiz",
firstNote: 6,
secondNote: 8,

},
{
name: "Charles",
firstNote: 4,
secondNote: 3,

},
{
name: "Cezar",
firstNote: 7,
secondNote: 4,

}]

function noteStudent (student){
    return`
    A média do(a) aluno(a) ${student.name} é: ${(student.firstNote + student.secondNote) / 2} `
    
}
for(let student of students){
    let media = (student.firstNote + student.secondNote) / 2
    let messagerNotes = noteStudent(student)
    if(media >=7){ 
    
        alert(messagerNotes + `
        Parabéns ${student.name}! Você foi aprovado(a) no concurso` )
    }else{
        alert(messagerNotes +`
        Não foi dessa vez, ${student.name}! Tente novamente!` )
    }
}



    
