// import chalk from 'chalk';

// + chalk.red(" : "+port)

const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const app = express();
const PORT = process.env.PORT;
const path = require('path')

app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) =>{

    res.send('Hi... Bank');

})

app.listen(PORT, ()=>{
    console.log("Listening on PORT"+ chalk.red(" : "+PORT));
})