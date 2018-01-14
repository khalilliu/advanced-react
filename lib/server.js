import express from 'express';
import config from './config';

// const express = require('express');
// const config = require('./config');

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/', (req,res) => {
  res.render('index',{message:'hello world'});
});

app.listen(config.port, function(){
console.log(`server start at ${config.port}`);
});
