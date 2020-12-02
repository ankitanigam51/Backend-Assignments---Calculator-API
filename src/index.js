const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const max = 1000000;
const min = -1000000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
// your code goes here

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/add', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (typeof num1 == 'string' || typeof num2 == 'string') {
    res.send({
      status: 'error',
      message: 'Invalid data types',
    });
  }
  if (num1 < min || num2 < min) {
    res.send({
      status: 'error',
      message: 'Underflow',
    });
  } else if (num1 > max || num2 > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else if (num1 + num2 > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else {
    res.send({
      status: 'success',
      message: 'the sum of given two numbers',
      sum: num1 + num2,
    });
  }
});

app.post('/sub', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (typeof num1 == 'string' || typeof num2 == 'string') {
    res.send({
      status: 'error',
      message: 'Invalid data types',
    });
  }
  if (num1 < min || num2 < min) {
    res.send({
      status: 'error',
      message: 'Underflow',
    });
  } else if (num1 > max || num2 > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else {
    res.send({
      status: 'success',
      message: 'the difference of given two numbers',
      difference: num1 - num2,
    });
  }
});

app.post('/multiply', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (typeof num1 == 'string' || typeof num2 == 'string') {
    res.send({
      status: 'error',
      message: 'Invalid data types',
    });
  }
  if (num1 > max || num2 > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else if (num1 < min || num2 < min) {
    res.send({
      status: 'error',
      message: 'Underflow',
    });
  } else if (num1 * num2 > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else {
    res.send({
      status: 'success',
      message: 'The product of given numbers',
      result: num1 * num2,
    });
  }
});

app.post('/divide', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  console.log(typeof num1 + ' ' + typeof num2);
  if (num2 === 0) {
    res.send({
      status: 'error',
      message: 'Cannot divide by zero',
    });
  } else if (typeof num1 == 'string' || typeof num2 == 'string') {
    res.send({
      status: 'error',
      message: 'Invalid data types',
    });
  }
  if (num1 < min || num2 < min) {
    res.send({
      status: 'error',
      message: 'Underflow',
    });
  } else if (num1 > max || num2 > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else {
    res.send({
      status: 'success',
      message: 'The division of given numbers',
      result: num1 / num2,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;