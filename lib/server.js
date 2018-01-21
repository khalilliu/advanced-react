import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
// const express = require('express');
// const config = require('./config');
import {data} from './testData';


const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', async (req,res) => {
  const initialContent = await serverRender();
  res.render('index', {initialContent});
});

app.get('/data',(req,res)=>{
  res.send(data)
})

app.listen(config.port, function(){
console.log(`server start at ${config.port}`);
});
