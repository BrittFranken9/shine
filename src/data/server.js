const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const USERS_FILE = './users.json'; // Zorg ervoor dat dit pad klopt

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    fs.readFile(USERS_FILE, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading users file');
        }

        const users = JSON.parse(data);
        const user = users.find((user) => user.email === email && user.password === password);

        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        res.status(200).send('Login successful');
    });
});

// Start de server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});