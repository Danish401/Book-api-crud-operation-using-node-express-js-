const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/BlogApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Use the book routes
app.use('/books', bookRoutes);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening on port no. ${port}`);
});
