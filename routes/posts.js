const express = require('express');
const router = express.Router();
const passport = require('passport');
const {ObjectId} =require('mongoose')
const config = require('../config/database');
const Posts = require('../models/posts');
const Users = require('../models/user');


router.post('/addpost', (req, res, next) => {
   let newPost = new Posts({
     title: req.body.title,
     text: req.body.text,
     username: req.body.username,
     
   });
 
   newPost.save().then((doc) => {
    res.json({success:true});
  }, (e) => {
    res.status(400).send(e);
  });
 });

 router.get('/allposts',(req,res,next)=>{
   //let name=req.body.username;
   Posts.find({}).then((result)=>{
    res.json({result})
   }).catch(e=>res.send(e))
   
 })

 router.get('/:usernme/:postId',(req,res,next)=>{
  let id=req.params.postId;
  Posts.findById(id).then((result)=>{
    res.json({result})
  }).catch(e=>res.json({success:"cannot find your post",e}))
 })


 router.get('/:username',(req,res,next)=>{
  
  let name=req.params.username;
  Posts.find({username:name}).then((result)=>{
    
    if(result.length===0){
         res.json({message:"You Havent Posted Anything Yet"})
    }
   else if(result){res.json({result})}

   }).catch(error => res.send(error))
  
})

router.patch('/:username/:postId',(req,res,next)=>{
let id=req.params.postId;
let username = req.params.username;
 let body= {
  title:req.body.title,
  text:req.body.text
}

Posts.findOneAndUpdate({_id: id}, {$set: body}, {new: true})
.then((doc)=>{
  res.json({success:true,message:"your post was updated"})
}).catch(e=>res.json(e))

})

router.delete('/:username/:postId',(req,res,next)=>{
  let id=req.params.postId;
  let username = req.params.username;
Posts.findByIdAndRemove(id).then(result=>{
  res.json({success:true,message:"your post was deleted"})
}).catch(e=>res.json({success:false,message:"Cannot find your post",e}))
})  

router.patch('/like/:username/:postId',(req,res,next)=>{
 let postId=req.params.postId;
  let username = req.params.username;
  let likes = req.body.likesCount;
  if(likes){
    Posts.findByIdAndUpdate(postId,{$inc: { likes: 1 } ,"$push": { "likedBy": username } })
    .then(result=>res.json({success:true}))
    .catch(e=>res.send({success:false}))
  }
else{
  Posts.findByIdAndUpdate(postId,{$inc: { likes:-1 } ,"$pull": { "likedBy": username } })
  .then(result=>res.json({success:true}))
  .catch(e=>res.send({success:false}))
}

})

router.patch('/comment/:username/:postId',(req,res,next)=>{
  let postId=req.params.postId;
  let username = req.params.username;
  let comm = req.body.comment;
  
  Posts.findByIdAndUpdate(postId,{"$push": { "comments":comm  } })
  .then(result=>res.json({success:true}))
  .catch(e=>res.send({success:false}))

})

router.patch('/requestCollaboration/:username/:collaborator/:postId',(req,res,next)=>{
  let postId=req.params.postId;
  let username = req.params.username;
  let collaborator = req.params.collaborator;
  let status = req.body.ready
  
if(status)
 { Posts.findByIdAndUpdate(postId,{"$push": { "requestedForCollaboration":collaborator  } })
  .then(result=>res.json({success:true,message:`Your request for collaboration with ${username} was sent ` }))
  .catch(e=>res.send({success:false}))}
  else{
    { Posts.findByIdAndUpdate(postId,{"$pull": { "requestedForCollaboration":collaborator  } })
  .then(result=>res.json({success:true,message:`Your request for collaboration with ${username} was cancelled ` }))
  .catch(e=>res.send({success:false}))}
  }
})

router.patch('/respondToCollaboration/:username/:collaborator/:postId',(req,res,next)=>{
  let postId=req.params.postId;
  let username = req.params.username;
  let collaborator = req.params.collaborator;
  let status= req.body.accept;
  if(status)
 { 
 
 Posts.findByIdAndUpdate(postId,{"$push": { "collaborations":collaborator  } ,"$pull": { "requestedForCollaboration":collaborator  }})
  .then(result=>{
    
    Users.findOneAndUpdate({"username":collaborator},{"$push": { "inCollaboration":`${postId}-${username}-${result.title}`, "notifications":`you are now in collaboration with ${username}`  } },{new: true})
    
    .then(result=>{
      res.sendStatus(200)})
    .catch(e=>res.send(e))
    return res.json({success:true,message:` ${collaborator} was added as your companion ` })})
  .catch(e=>res.send({success:false}))
 }
else{
  Posts.findByIdAndUpdate(postId,{"$pull": { "requestedForCollaboration":collaborator  } })
  .then(result=>{ 
    //console.log(result)
    Users.findOneAndUpdate({"username":collaborator},{"$push": {  "notifications":`your request  to collaboration with ${username} was declined `} },{new: true})
    
    .then(result=>res.sendStatus(200))
    .catch(e=>res.send(e))
    return res.json({success:true,message:` ${collaborator} was Declined for collaboration ` })})
  .catch(e=>res.send({success:false}))
}
})

 module.exports = router;