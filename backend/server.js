const express = require('express');
let bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('hello world')
});

app.post('/fileInfo', (req, res, next) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, () => console.log('server started...'));