const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const actionmovies = require("./mockdata.json")
const language = require("./language.json")
const languageRoutes = require("./server/api/v1/Languages/languages")
const mongo = require('mongoose')
const Languages = require('./models/languageModel')

const body = require('body-parser')


dotenv.config();

//run the server 
const app = express();

const port = process.env.SERVER_PORT
//put the port in dotenv

// app.use('/api')

app.use(express.json())

app.use(body.json())

app.get('/api/v1/movies',(req,res)=>{
// res.send("Testing Buddy system")

return res.json(actionmovies);

});

app.use('/',languageRoutes);

app.post('/api/v1/languages', async(req, res)=>{
    try{
        const languages = await Languages.create(req.body)
        res.status(200).json(languages)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.get('/', (req, res)=>{
    res.send("Default ")
})

app.get('/api//v1/movies/:id', (req, res)=>{
    const id = Number(req.params.id);
    const user = actionmovies.find((user) => user.id === id)
    return res.json(user);
})

app.get('api//v1/shows',(req, res)=>{
res.send("Testing")
});

//Making routes 


mongo.connect('mongodb+srv://sushii:LAUNCHER1200next1200@cluster0.bvju39f.mongodb.net/DisneyHotstar-API?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connected to database bhai')
    app.listen(port, () => console.log(`Listen ont this http://localhost:${port}`))
}).catch((error)=>{
    console.log(error)
})
                                                        