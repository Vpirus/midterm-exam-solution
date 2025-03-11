const express = require('express');
const app = express();
const port = 3000;

// Define a route for '/test' that will return a JSON response
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Glydel Villarino' });
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
