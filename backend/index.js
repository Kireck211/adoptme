const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const pets = require('./pets/pets');
const { PORT } = process.env;


app.use(morgan('common'));
app.use(cors());

app.use('/pets', pets);
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`)
})