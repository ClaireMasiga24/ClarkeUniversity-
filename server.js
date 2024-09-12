const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const studentRouter = require('./Routes/studentformRoute');

// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

// **Configurations**
// Set Pug as the view engine for rendering HTML files
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Set views folder (where Pug templates are stored)

// Middleware to serve static files like CSS and images
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// **Routes**
app.get('/', (req, res) => {
    res.render('form', { title: 'CIU Student Application Form', message: 'Welcome to the Student Application Form' });
});

// Use the student router for handling CRUD operations
app.use('/api/studentForm', studentRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentdb')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
