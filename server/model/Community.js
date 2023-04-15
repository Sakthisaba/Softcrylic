const mongoose = require('mongoose')
const CommunitySchema= new mongoose.Schema({
    Name:String,
    Events:[mongoose.Types.ObjectId],
    Admin:[mongoose.Types.ObjectId],

})

const Community = mongoose.model('Community',CommunitySchema)
module.exports  =Community;