const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = 3002;
app.use(cors());
const API_KEY = `${process.env.API_KEY}`;

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
