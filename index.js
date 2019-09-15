const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("This is working, cap!")
})
const port = process.env.port || 80 
app.listen(port, function(){
    console.log('Listening on port 3000!')
})

