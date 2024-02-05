const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://mongodb:27017/dockerTest')
    .then(() => {
        console.log('connected to the database')
    })
    .catch((error) => {
        console.log(error.message)
    })

app.use(express.json())

app.use('',(req,res,next)=>{
    console.log(req.url)
    next()
})

app.get('/testServer/:id',(req,res)=>{
    res.send('Hello '+req.params.id+' to dockerTest')
})

app.get('/testServer1/:id',(req,res)=>{
    res.send('Hello111 '+req.params.id+' to dockerTest')
})

app.get('',(req,res)=>{
    res.send('This is dckerTest')
})
app.listen(process.env.PORT || 4000, () => {
    console.log('listeneing to the server')
})