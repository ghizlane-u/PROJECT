const fs = require('fs');
const path = require('path'); // don't forget to require path module
const filePath = path.join(__dirname, 'blogs.json'); 
class blogModels {  
   astPostId = 0;

  //static getBlogs() {
    //try {
     // const data = fs.readFileSync(filePath, 'utf-8');
     // return JSON.parse(data);
    //} catch (error) {
      // If the file doesn't exist or there's an error reading it, return an empty array
     // return [];
    //}
  //} 
//static addpost(title, content,author,date) {
    //try {
      // Get existing posts
      //const existingPosts = this.getBlogs();

      // Add the new post to the array
      //existingPosts.push(newPost);

      // Write the updated array back to the file
      //fs.writeFileSync(filePath, JSON.stringify(existingPosts, null, 2), 'utf-8');

     // return true; // Indicate success
   // } catch (error) {
     // console.error(error);
     // return false; // Indicate failure
    //}
 // }
  static getBlogs() {
  const rawData = fs.readFileSync(filePath);
  const posts = JSON.parse(rawData); 
   // Mettez à jour lastPostId en recherchant le plus grand ID existant
   // lastPostId = Math.max(...posts.map(post => post.id), 0);

  return posts;
}

static createPost(newPost) {
  const posts = this.getBlogs();
  posts.push(newPost);
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
  return true; 
} 
static updatePost(id, updatedData) {
  try {
    const existingData = getBlogs();
    const index = existingData.findIndex(post => post.id === id);

    if (index !== -1) {
      // Update the post with the new data
existingData[index] = Object.assign({}, existingData[index], updatedData);

fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
return true;
    } else {
      // Post with the given ID not found
return false;
    }
} catch (error) {
console.error(error);
return false;
 }} 
static deletePost(postId) {
    let allPosts = this.getBlogs()

    // Find the index of the post with the specified ID
    const postIndex = allPosts.findIndex(post => post.id == postId);

    if (postIndex !== -1) {
      // Remove the post from the array
      allPosts.splice(postIndex, 1);

      try {
        // Write the updated array back to the JSON file
        fs.writeFileSync(filePath, JSON.stringify(allPosts, null, 2));
        console.log('Article supprimé avec succès.');
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'article :', error);
      }
    } else {
      console.log('Article non trouvé.');
    }
  }
} 
module.exports=blogModels;