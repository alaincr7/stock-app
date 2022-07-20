require('dotenv').config()

const express = require ('express')

const app=express()

app.get('/', (req, res)=>{

    console.log('peticion recibida')

    res.send('<h1>FELIZ ANIVERSARIO MI REINA - 4 AÑOS JUNTICOS</h1>')
})

const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    console.log('servidor escuchando en el puerto ${PORT}')
})