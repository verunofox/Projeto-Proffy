//procurar o botao
document.querySelector("#add-time")


//Quando clicar no botao
.addEventListener("click",cloneField) //fique ouvindo ... se Ouvir click "execulte cloneField()"



//Executar uma ação
function cloneField(){
   
    
 //Duplicar os campos, que campo ?
 const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)   /*Node sempre é referencia a estruturas html 
 cloneNode( especifique com true or false se deseja  que clone os decendentes tambem ) const=Variavel constante para que ela
 nao mude seu valor*/


 //limpar os campos. que campos ?
 const fields = newFieldContainer.querySelectorAll('input')
/*
fields[0].value=""
 fields[1].value=""      solução pouco inteligente imagina se existe mil input
*/
 //para cada campo, limpar forma inteligente
 fields.forEach(function(fields){
    // pegar o valor do momento e limpa ele
    fields.value=""
    

 })
 

 
    
    //colocar  na pagina: onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer) /*appendChild = adicione um filho (o filho que vc deseja add)*/ 
}


   