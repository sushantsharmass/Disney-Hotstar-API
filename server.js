const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')


dotenv.config();

//run the server 
const app = express();

const port = process.env.SERVER_PORT
//put the port in dotenv

// app.use('/api')

app.get('/v1/movies',(req,res)=>{
res.send("Testing Buddy system")
});

//Making routes 
app.listen(port, () => console.log(`Listen ont this http://localhost:${port}`))
                                                               