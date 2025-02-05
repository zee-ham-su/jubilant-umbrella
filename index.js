const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors());

// API endpoint to return required JSON response
app.get('/', (req, res) => {
    const response = {
        email: 'hsufiian@yahoo.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/zee-ham-su'
    };
    res.json(response);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
