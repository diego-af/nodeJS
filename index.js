const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const array=['Java','React Native','Musica']

app.get('/cursos/:index',(req,res)=>{
    const {index} = req.params

    res.json(array[index])
})



app.listen(port)