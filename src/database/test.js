const Database= require('./db')
const createProffy= require('./createProffy')

Database.then(async (db)=>{
    //Inserir dados
    proffyValue={
        name:"Leandro Alves",

        avatar:"https://scontent.fsod3-1.fna.fbcdn.net/v/t1.0-9/113818355_3205137039532395_1413698777942736679_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=SI1-sWS2aXMAX9MZOJf&_nc_ht=scontent.fsod3-1.fna&oh=52a031211ca12af72f068df5e4f81afd&oe=5F509A0D" ,

        whatsapp:"15988052526",

        bio:"Entusiasta das melhores tecnologias de quimica avançada Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas atraves de experencias.Mias de 200.00 pessoas ja passaram por uma das minhas explosoes. ", 
  
       
    }
    classValue={
        subject: 1 ,
  
        cost:"150,50",
      //o proffy id vem pelo database
       
    }
    classScheduleValues=[
        //class_id virá pelo database apos cadastrarmos a class
        {
            weekday: 1,
  
            time_from: 720 ,
      
            time_to: 1220 
      
        },

        {
            weekday: 0,
  
            time_from: 520 ,
      
            time_to: 1220 
      
        }
    ]
    
     //await createProffy(db,{ proffyValue,classValue,classScheduleValues})

     
    // sempre que usar await=espere a função que esta relacionada a ele precisa ter o "async"
    //consultar os dados inseridos

    //todos os proffys
  const selectedProffys=  await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)

    /*consultar as classes de um determinado professor
    e trazer junto os dados do professor
     */
    const selectClassesAndProffys= await db.all(`
     SELECT classes. *, proffys.*
     FROM proffys
     JOIN classes ON (classes.proffy_id = proffys.id )
     WHERE classes.proffy_id = 5;
    
    
    `)
  // console.log(selectClassesAndProffys)

    // o Horario que a pessoa trabalha ,exemplo 8h/18
    //o horario do time_from é (8h) precisa ser menor ou igual ao horario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules= await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id= "1" 
        AND class_schedule.weekday ="1"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "520"
        
        
    
    `)
    //console.log(selectClassesSchedules)
  
  
   
})