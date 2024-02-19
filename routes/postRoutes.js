const express=require("express");
const router = express.Router();
const postController = require("../controllers/postController.js");
router.use(express.json());
router.get('/getAllpost', postController.getAllPosts); 
router.post('/posts', postController.addNewPost);  
router.put('/posts/:id', postController.updatePost);  
router.delete('/remove/:id', postController.deletePost); 

module.exports=router;