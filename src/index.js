const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/handle', (req,res) => {
    console.log("Hello world!");
});

let num1 = 10;
let num2 = 5;

app.post('/add', (req,res) => {
    if(req.body.num1 > 1000000 && req.body.num2 > 1000000){
        res.send("Overflow")
    }
    else if(req.body.num1 > "" && req.body.num2 > ""){
        res.send("Invalid data types")
    }else {
    res.send({
        status: "success "|" failure "|" error",
        message: "the sum of given two numbers",
        sum: num1+num2
        })
    }
})

app.post('/sub', (req,res) => {
    res.send({
        status: "success"|"failure"|"error",
        message: "the difference of given two numbers",
        difference: num1-num2
        })
})

app.post('/multiply', (req,res) => {
    if(req.body.num1 < 1000000 && req.body.num2 < 1000000){
        res.send("Overflow")
    }
    else if(req.body.num1 > "" && req.body.num2 > ""){
        res.send("Invalid data types")
    }else {
    res.send({
        status: "success"|"failure"|"error",
        message: "The product of given numbers",
        result: num1*num2
        })
    }
})

app.post('/divide',(req,res) => {
    let num2 = 0;
    res.status(401).send({
        status: "success"|"failure"|"error",
        message: "The division of given numbers",
        result: num1/num2
        })
        console.log("Cannot divide by zero");
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;