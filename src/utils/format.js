

const subjects=[
    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    


]

const weekdays=[
    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    


]
//funcionalidades


function getSubject(subjectNumber){   //captura dos numeros do subject para transformar em string
    const arrayPositio=+subjectNumber-1
    return subjects[arrayPositio]

}

function convertHourstoMinutes(time){
   const [hour,minutes]= time.split(":") //usando splite pra separa e fazendo calculo da hora
   return Number((hour *60)+minutes) // desnecisario falta de confinaça na platforma

}


module.exports={
    subjects,
    weekdays,
    getSubject,
    convertHourstoMinutes


}