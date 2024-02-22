const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const actionmovies = require("./mockdata.json")

dotenv.config();

//run the server 
const app = express();

const port = process.env.SERVER_PORT
//put the port in dotenv

// app.use('/api')

app.use(express.json())

app.get('/v1/movies',(req,res)=>{
// res.send("Testing Buddy system")

return res.json(actionmovies);

});

app.get('/', (req, res)=>{
    res.send("Default ")
})

app.get('/v1/movies/:id', (req, res)=>{
    const id = Number(req.params.id);
    const user = actionmovies.find((user) => user.id === id)
    return res.json(user);
})

app.get('/v1/shows',(req, res)=>{
res.send("Testing")
});

//Making routes 
app.listen(port, () => console.log(`Listen ont this http://localhost:${port}`))

mongoose.connect('mongodb+srv://sushii:LAUNCHER__00next__0012d00005d@cluster0.bvju39f.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log('Connected to database')
}).catch((error)=>{
console.log(error)
})
                                                               