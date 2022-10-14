// import chalk from 'chalk';

// + chalk.red(" : "+port)

const express = require('express');
// const chalk = require('chalk');
// const debug = require('debug')('app');
const app = express();
const port = 3020;
const path = require('path')

app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) =>{

    res.send('Hi... Bank');

})

app.listen(port, ()=>{
    console.log("Listening on port");
})