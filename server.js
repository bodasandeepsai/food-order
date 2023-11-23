const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Store the selected options in an array
let selectedOptions = [];

// Handle POST requests to /log
app.post('/log', (req, res) => {
    const { selectedOption } = req.body;


    if (selectedOption) {
        // Store the selected option in the array
        selectedOptions.push(selectedOption);

        // Log the updated array to the console (for demonstration purposes)
        console.log('selected option:' , selectedOptions);

        res.status(200).json({ message: 'Option logged successfully.' });
    } else {
        res.status(400).json({ error: 'Invalid request.' });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
