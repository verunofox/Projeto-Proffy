
//inportaçoes servidor
const express = require('express')
const server = express()
const nunjucks= require('nunjucks')

const{
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses

}=require('./pages')

//configurar nunjucks(templete engine)
nunjucks.configure('src/views',{
    express: server,
    noCache:true,
})
// inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))


//configurar arquivos estaticos (css,scripts,img)
.use(express.static("public"))  
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-class",saveClasses)
//startserver
.listen(5500)