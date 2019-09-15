const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("This is working, cap!")
})
app.set('port', process.env.PORT || 80 ) 
app.listen(app.get('port'), function(){
    console.log('Listening!')
})

