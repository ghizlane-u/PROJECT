const express = require('express'); 
const app = express(); 
const rout=require("./routes/postRoutes.js"); 
const port = 3000;
app.use(express.json());
app.use(rout);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
