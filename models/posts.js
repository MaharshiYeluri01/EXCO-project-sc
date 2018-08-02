const mongoose = require('mongoose');
const config = require('../config/database');

var UserSchema = mongoose.Schema( {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true

  },
  text: {
   type: String,
   required: true,
   minlength: 1,
   trim: true
 },
 username: {
   type: String,
   required: true,
   minlength: 1,
   trim: true
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
 comments:[String],
 collaborations:[],
requestedForCollaboration:[],
discussions:[]
 
});
const Posts = module.exports = mongoose.model('Posts', UserSchema);


