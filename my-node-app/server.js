const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! This is my Node.js app running in Docker & Kubernetes!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
