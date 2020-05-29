// app_id = "1009367"
// key = "861de76aa57e17cde095"
// secret = "440946700186ff537844"
// cluster = "ap2"


const express = require('express');
const path = require('path');
const boydParser = require('body-parser');
const Pusher = require('pusher');
const http = require('http');
const app = express();
const server = http.createServer(app);


const pusher = new Pusher({
    app_id = "1009367",
    key = "861de76aa57e17cde095",
    secret = "440946700186ff537844",
    cluster = "ap2",
    encrypted = true
});

app.use(boydParser.json());
app.use(boydParser.urlencoded({extended : false}));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, OPTION, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type')
    res.setHeader('Access-Control-Allow-Credential', true)
    next()
});

app.get('/', (req, res) => {
    res.send('welcome');
});

app.post('/price/new', (req, res) => {
    pusher.trigger('coin-prices', 'prices', {
        prices : req.body.prices
    });
    res.sendStatus(200);
});


app.set('port', (5000))
server.listen(app.get('port'), () => {
    console.log(`The server is running on`, app.get('port'));
});