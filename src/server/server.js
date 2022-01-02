const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPrimoises = require('fs').promises;
const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();
console.log('hello world server.js')

app.get('/', (req, res, next) => {
  res.send('hello world! sent from server');
  next()}, (req, res) => {
  // res.sendFile('./index.html', {root: __dirname});
  console.log('next delayed')
})

app.get('/index.html', (req, res) => {
  // res.send('hello world! sent from server');
  res.sendFile('./index.html', {root: __dirname});
})

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   const extension = path.extname(req.url);
//   let contentType;
// })
// server.listen(PORT, () => console.log(`server running on port ${PORT}`))
app.listen(PORT, () => console.log(`server running on port ${PORT}`))