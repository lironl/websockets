
const express = require('express');
const app = express();

app.use(express.static('public'));

// Listen
app.listen(80, function() {
    console.log('listening on port 80..');
});