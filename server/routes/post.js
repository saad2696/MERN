const express = require('express');
const Post = require('../models/Post');

const router = express.Router();
//display products 
router.get('/',async(req,res)=>{
  try{
 const posts = await Post.find();
 res.json(posts);
  }catch(err){
     res.json({message: err});

  }
});
//insert products
router.post('/',async (req,res)=>{
const  post = new Post({
   title:req.body.title,
   price:req.body.price,
   img:req.body.img
});
try{
const savedPost = await post.save()
res.json(savedPost);
}catch(err){
   res.json({message: err});
}
});

//any specific querry
router.get('/:postid',async(req,res)=>{
   try{
      var mobile = await Post.findById(req.params.postid);
      res.json(mobile);
   }catch(err){
    res.json({message: err});
   }

});

//delete 

router.delete('/:postid',async(req,res)=>{
   try{
      const postremoved =  await Post.remove({_id: req.params.postid});
      res.json(postremoved);
   }catch(err){
      res.json({message: err});
   }
   
})
//updating a post 
router.patch('/:postId',async(req,res)=>{
   try{
      const postupdate = await Post.updateOne({_id:req.params.postId},
         {$set:{title: req.body.title}});
      res.json(postupdate);
   }catch(err){
      res.json({message: err});
   }

});

module.exports = router;
