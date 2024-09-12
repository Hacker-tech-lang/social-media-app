const express = require('express');
const app = express();

// User Authentication
app.post('/register', (req, res) => { /* ... */ });
app.post('/login', (req, res) => { /* ... */ });

// Posts
app.post('/post', (req, res) => { /* ... */ });
app.get('/posts', (req, res) => { /* ... */ });

// Likes & Comments
app.post('/like/:postId', (req, res) => { /* ... */ });
app.post('/comment/:postId', (req, res) => { /* ... */ });

// Follow System
app.post('/follow/:userId', (req, res) => { /* ... */ });

app.listen(3000, () => console.log('Server running'));
