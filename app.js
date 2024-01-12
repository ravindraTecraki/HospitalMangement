const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

const userAuth = require('./routes/auth-routes');
const patientsAuth = require('./routes/patients-routes');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.error('Error in DB connection', err);
  });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());


app.use('/auth', userAuth);
app.use('/patients', patientsAuth);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log("hello bhai sab backed working at  ", port);
})
