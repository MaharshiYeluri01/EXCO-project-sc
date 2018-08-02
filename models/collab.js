const mongoose = require('mongoose');
const config = require('../config/database');

var UserSchema = mongoose.Schema( {
 
  text: {
   type: String,
  
   minlength: 1,
   trim: true
 },
 creator: {
   type: String,
   required: true,
   minlength: 1,
   trim: true
 },
 postId: {
   type: mongoose.Schema.Types.ObjectId,
   required: true
 },
  
 createdAt:{
   type:Date,
   default:new Date().toISOString()

 },
 likes:{
 type:Number,
 default:0
 },
 likedBy:[],
 comments:[],
 collaborations:[],

 
});
const Collab = module.exports = mongoose.model('Collab', UserSchema);


