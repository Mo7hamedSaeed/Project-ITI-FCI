const express = require('express');     //import express from express
const cors = require('cors');           //import cors from express
const mongoose = require('mongoose');   //import mongoose from
const StudentDegrees = require('./Models/StudentDrades'); //import StudentDrades from models

const app = express();                   // create a new app (server)
app.use(cors());                        // use cors

mongoose                               // connect mongodb
.connect("mongodb+srv://mo7hamedsaeed:ABCabc123@cluster0.oqswxw8.mongodb.net/StudentDegree")
.then(() =>{
    console.log("connected to database");
})
.catch(err =>{
    console.log(err);
});
const port = 3000;                      // default port


app.get('/studentsdegrees', (req, res) => {
    StudentDegrees.find()
    .then((studentData)=>{
        res.send(studentData);
    })
    .catch(err =>{
        res.send(err);
    });
});

app.get('/studentsdegrees/:seating_no', (req, res) => {
  var stdseatingNo = +req.params.seating_no;
  StudentDegrees.findOne({seating_no: stdseatingNo})
  .then((studentData)=>{
      res.send(studentData);
  })
  .catch(err =>{
      res.send(err);
  });
});

app.listen(port);
