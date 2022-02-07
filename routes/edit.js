const express = require('express');
const DbUtils = require('../models/dboperation');
const Member = require('../models/member');

const { request } = require('http');
const router = express.Router();


router.use((req,res,next)=>{
  console.log('middleware routes/edit');
  next();
})


router.route('/').get((req,res)=>{
  try{
    res.render('../views/edit.html')
  }catch(error){
    console.log("editerror")

  };
})

module.exports = router;