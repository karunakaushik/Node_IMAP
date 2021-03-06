const http = require('http');
// const express = require('express');
const app = require('./app');

require('dotenv').config();





//DataBase connection here..........
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testemail', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log(`...Database connected!...`)
}).catch((err) => console.log( err));



// use .env file...............
const port = process.env.PORT;

// send email from one gmail to another gmail................
// const sendEmail = require('./sendEmail');
// console.log("Email Sent ...........");

// retrive email from gmail using IMAP.............
const imapEmail = require('./imap');
console.log("...IMAP DONE.....");

// create server ...........
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`............server is running at ${port}...... `)
});
