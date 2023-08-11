const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(cors());
const API_KEY = "pK4eMAID3860vCrhl6mGQeHds2FvDYqo7eIcmcbv4bTzp5EPBQBoP0SpEG8zb8G4";

app.get('/currencies', async (req, res) => {
    try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price', {
            headers: {
                'X-MBX-APIKEY': API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching rates');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});