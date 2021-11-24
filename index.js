const express = require('express')

const app = express()

const porta = process.env.PORT || 3000

app.use(express.json())

/* Criando uos middlewares */

function checkCurso(req,res,next){
   const {name}= req.body

   if(!req.body.name){
       return res.status(404).json({error: 'Nada ecnobtrado'})
   }
   return next()

}

/* Array com os dados a ser passados */
const cursos = ['Java', 'JavaScript', 'Mongodb']

/* Retornando os dados */
app.get('/cursos',(req,res)=>{
    res.json(cursos)
})

/* Inserindo cursos com o Post */
app.post('/cursos',checkCurso,(req,res)=>{
    const {name}= req.body

    cursos.push(name)
    res.json(cursos)
})

/* Atualizando o dados com o PUT */

app.put('/cursos/:index',checkCurso,(req,res)=>{
    const {index} = req.params
    const {name} = req.body

    cursos[index] = name
    res.json(cursos)
})
app.listen(porta,()=>console.log("rodando o servidor"))