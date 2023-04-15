const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true    
    },
    summary:{
        type:String,
        required:true   
    },
    organizer:[mongoose.Types.ObjectId],
    participansts:[mongoose.Types.ObjectId]
       
    
})

const Event= mongoose.model('Event',EventSchema)
module.exports = Event; 