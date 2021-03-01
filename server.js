const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// * SET SERVER PORT
// NOTE dotenv is required to read .env file
const dotenv = require('dotenv');
dotenv.config();


const PORT = 5000;

// CREATE express
const app = express();

// Cors broswer
const corsOptions = {
    origin: 'http://localhost:4200',
};

// * SETUP OUR SERVER
app.use(express.static('public'));
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));






// ! Use for test
app.get('/', (req, res) => {
    res.json({ message: 'Test Express JS' });
});


app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}.`); 
  
})
