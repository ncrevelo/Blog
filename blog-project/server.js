const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/posts'); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Usar las rutas de posts
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
