const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan =require('morgan');
const app = express();
const PORT = process.env.PORT;
const path = require('path');

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname,"/public/")));

// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     next(err);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

app.set("views", "./src/viwes");
app.set("view engine", "ejs");

app.get("/",  (req,res) => {

    res.render('index');

});

app.listen(PORT, ()=>{
    debug("Listening on PORT"+ chalk.red(" : "+PORT));
})