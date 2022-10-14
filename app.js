const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan =require('morgan');
const app = express();
const PORT = process.env.PORT;
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) =>{

    res.send('Hi... Bank');

})

app.listen(PORT, ()=>{
    debug("Listening on PORT"+ chalk.red(" : "+PORT));
})