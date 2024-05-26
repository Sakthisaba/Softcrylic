# Softcrylic 



# Hi there, I'm Chinna sakthi 

# Community EventManagement #
 I've been assigned to this task,which was given by [SoftCrylic](https://www.softcrylic.com/)<br>
 
 
 
# Task details
To build a system for managing community events by Event Admin and Coordinators. Anyone can signup and
become a user of the Platform and they can join any community groups and optIn to attend the events in that
community either offline or online.

|     TECH | STACK     |
| ---      | ---       |
| FrontEnd | React     |
| BackEnd  | Node js   |
| Database | Mongodb   |


## Home Page
![Screenshot Softcrylic](https://user-images.githubusercontent.com/75113031/232203311-815dab15-d86e-4b7e-8766-c10358bfb7f9.png)
## Login Page
![Screenshot login](https://user-images.githubusercontent.com/75113031/232203326-fe78f6b5-c784-44aa-8f41-311936bf2082.png)
## Event Page
![image](https://user-images.githubusercontent.com/75113031/232274376-6352d71c-556f-4b2c-a800-8792c84b2393.png)



## No Sql Model
1.User
```
const Userschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role :String
})

```
2.Community
```
const CommunitySchema= new mongoose.Schema({
    Name:String,
    Events:[mongoose.Types.ObjectId],
    Admin:[mongoose.Types.ObjectId],

})
```
3.Events
```
const EventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true    
    },
    summary:{
        type:String,
        required:true   
    },
    communityID :mongoose.Types.ObjectId,
    time:Date
    ,
    organizer:[mongoose.Types.ObjectId],
    participansts:[mongoose.Types.ObjectId]
       
    
})

```
EmailID  <chinnasakthi.k.2019.cse@rajalakshmi.edu.in> <br>
LinkedIn <https://www.linkedin.com/in/chinna-sakthi-k-482b4b1a9/>

