const express = require('express');
const DbUtils = require('../models/dboperation');
const Member = require('../models/member');

const { request } = require('http');
const router = express.Router();


router.use((req,res,next)=>{
  console.log('middleware routes/create');
  next();
})

router.route('/').post((req,res)=>{
  let member = {...req.body};
  DbUtils.addMember(member).then(result =>{
    res.status(201).json(result);
  }).catch(error => {console.log(error);})
  
})

module.exports = router;