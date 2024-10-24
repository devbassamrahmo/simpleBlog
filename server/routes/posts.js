const express = require('express')
const router = express.Router()
const {Posts} = require('../models')
var bodyParser = require('body-parser')
router.use(bodyParser.json())
//get all posts
router.get('/allPosts' , async (req,res) =>{
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts)
})

//post new post
router.post('/add-post' , async (req , res) =>{
    const {title , postText , username} = req.body;
    const newPost = {title : title , postText : postText , username : username};

    await Posts.create(newPost)
    res.json(newPost)
})





module.exports = router