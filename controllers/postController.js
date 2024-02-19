const post =require("../models/post.js")  

class PostController {
  static getAllPosts(req, res) {
    try {
      var results =  post.getBlogs();
      res.send(results);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  } 
 //static addnewPost(req,res){
//var name=req.body.name; 
//var title=req.body.title;
//var author=req.body.author;
////var date=req.body.date; 
////var x=post.addpost(name,title,author,date);
//if (x==true)
//res.send("the post id add sussesflly");
//else{ 
 /// res.send(" the add failed");
//}
//}
//} 

  //static addNewPost(req, res) {
   // const { title, content, author } = req.body;

    //if (!title || !content || !author) {
    //  return res.status(400).send('Missing required fields in the request body');
    //}

    //const newPost = {
     // title,
      //content,
      //author,
     // date: new Date().toISOString(),
    //};

   // const success = post.createPost(newPost);

   // if (success) {
    //  res.send('Post added successfully');
    //} else {
    //  res.status(500).send('Failed to add post');
    //}
  //} 
  static addNewPost(req, res) {
    const { name,title, content, author,date } = req.body;
      console.log('Request Body:', req.body);  
     console.log('Name:', name);
        console.log('Title:', title);
       console.log('Content:', content);
        console.log('Author:', author);


    if (!title || !content || !author) { 
      
      return res.status(400).send('Missing required fields in the request body');
    }

    const newPost = { 
      //id: ++post.lastPostId, 
       id:post.getBlogs().length +1,
      title,
      content,
      author,
      date: new Date().toISOString(),
    };
    
    const success = post.createPost(newPost);
   
    if (success) {
      res.send('Post added successfully');
    } else {
      res.status(500).send('Failed to add post');
    }
} 


static updatePost(req, res) {
    const postId = parseInt(req.params.id, 10);
    const updatedData = req.body;

    if (!postId || Object.keys(updatedData).length === 0) {
      return res.status(400).send('Invalid request parameters');
    }

    const success = post.updatePost(postId, updatedData);

    if (success) {
      res.send(`Post with ID ${postId} updated successfully`);
    } else {
      res.status(404).send( `Post with ID ${ postId} not found`);
    }
  }

 static deletePost(req, res)  {
    const postId = req.params.id;

    // Call the deletePost method from the BlogPost model
    post.deletePost(postId);

    // You can handle the response accordingly (e.g., send a response back to the client)
    res.send(`Post with ID ${postId} deleted successfully.`);
  }
  }
module.exports = PostController;