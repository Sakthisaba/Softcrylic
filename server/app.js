const Event = require('./model/Event');
const Community = require('./model/Community');
const User = require('./model/User');
const mongoose = require('mongoose')
const express = require('express')
const parse = require('body-parser');
mongoose.connect("mongodb+srv://"+`new-user`+":"+`wTfJ6zgekWVrgrdR`+"@node.tscnl.mongodb.net/Softcrylic?retryWrites=true&w=majority").then(()=>{
    console.log("DB connected")    
app.listen(8080,function(res,err){
        console.log("server started")
    })
})



var app = express();

app.use(parse.json())
app.use(parse.urlencoded({ extended: false }))


app.get('/auth',function(req,res){
    const email = req.query.email;
    const password =  req.query.password;
    console.log(req.query.email)
    User.find({email:email})
    .then((result)=>{
      
       if(result.length==0){
        res.send("failure")
         console.log("in 1")
       }
       else{
        console.log("in 2")
        result.forEach((user)=>{
             const passAuth = user.password;
       
            
                if(passAuth == password){
                     console.log("Correct passwoord")
                    //  res.cookie("name",req.body.name, {expire: 4000000 + Date.now()})
                     console.log("Cookie created")
                     const response = {"name":user.name,"role":user.role}
                     res.send(response)
  
                    }
                 else{
    
                     res.send("failure")
                    }
                 }
  
          )}
})
})

app.post('/signup',function(req,res){

    let email = req.body.email;
    let password = req.body.password;
})

app.get('/fetchEvents',function(req,res)
{
    Event.find().then((event)=>{
        
        res.send(JSON.stringify(event))
    })

})
app.get('/admin')
