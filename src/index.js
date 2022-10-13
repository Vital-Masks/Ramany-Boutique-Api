const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
// const url = 'mongodb://localhost:27017/ramany-boutique'
const url =
  'mongodb+srv://yathushan:BQdEfkQANH6kT3Nu@cluster0.hodq8.mongodb.net/ramany-boutique?retryWrites=true&w=majority';
const commonrouter = require('./router');
var cors = require('cors');

const app = express();
const hostname = 'localhost';
const port = 3001;

app.use(cors());

databaseConnection();
serve();

function databaseConnection() {
  mongoose.connect(url, { useNewUrlParser: true });
  const con = mongoose.connection;

  con.on('open', function () {
    console.log('Database Connected>>>>>>>>>>>>');
  });
}

// fixing "413 Request Entity Too Large" errors
app.use(express.json({ limit: '500mb', extended: true }));
app.use(
  express.urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 })
);

app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('The Ramya Boutique APIs!');
});

app.use('/api/', commonrouter);

function serve() {
  app.listen(port, () => {
    console.log(`Server running`);
  });
}
