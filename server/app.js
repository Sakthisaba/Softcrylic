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
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.query.email)
    User.find({email:email})
    .then((result)=>{
      
       if(result.length==0){
        //  res.send("Wrong Information,Please try again !<a href='/login'>back </a>")
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
                     res.send(user)
  
                    }
                 else{
    
                     res.send("Wrong Information,Please try again")
                    }
                 }
  
          )}
})
})

app.post('/signup',function(req,res){

    let email = req.body.email;
    let password = req.body.password;
})


