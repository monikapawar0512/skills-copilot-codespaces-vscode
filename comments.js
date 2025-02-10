// create web server
// load express module
const express = require('express');
const app = express();
// load the comments module
const comments = require('./comments');

// set up the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// return all comments
app.get('/comments', (req, res) => {
    res.send(comments.getComments());
});

// return a specific comment
app.get('/comments/:id', (req, res) => {
    const comment = comments.getComment(req.params.id);
    if (comment) {
        res.send(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});
