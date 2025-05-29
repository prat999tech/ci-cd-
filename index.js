require('dotenv').config()// this we have done after installing env package and we get this syntax from env website
// this we have done after installing env package and we get this syntax from env website
const express = require('express')// here we can also use "import express from 'express'""
const app = express()
const port = process.env.PORT || 3000; //this will use the environment variable if available, or fallback to 3000.

app.get('/', (req, res) => { //here we give "GET" request, '/' this is our home route, now app will listen GET request on home route, of we get ant any request then we give call back
  res.send('Hello World!') // if we get request then in response we give hello world
})
// now we can make our own GET request for example:-
app.get('/about', (req, res) => {
  res.send('About Page') // if we get request then in response we give about page
})
////////////////////////////////////////////
//this is my updated line in this code
app.get('/contact', (req, res) => {
  res.send("<h1> contacts </h1>") // if we get request then in response we give contact page
}) // for getting response which is updated we need to restart our server
/////////////////////////////////////////

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
  });