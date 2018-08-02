const express = require('express');
const router = express.Router();
const passport = require('passport');
const {ObjectId} =require('mongoose')
const config = require('../config/database');
const Posts = require('../models/posts');
const Collabs = require('../models/collab');
const Users = require('../models/user');

router.patch('/discussions/:postedBy/:postId',(req,res,next)=>{

let creator = req.body.creator;

let postId =  req.params.postId;
let text =req.body.text

Posts.findByIdAndUpdate(postId,{"$push": { "discussions":text  } })
  .then(result=>res.json({success:true }))
  .catch(e=>res.send({success:false}))

})
router.get('/participations/:username',(req,res,next)=>{
  let username=req.params.username
  
  Users.findOne({username},{"inCollaboration":1,"notifications":1,"_id":0}).then(result=>res.json({result}))
  .catch(e=>res.send(e))
})
router.get('/notifications/:username',(req,res)=>{
  let username =req.params.username
  Users.findOneAndUpdate({username},{"$set":{notifications:[]}},{new:true})
  .then(result=>res.json({success:true}))
  .catch(e=>res.json({success:false}))
})

module.exports = router;