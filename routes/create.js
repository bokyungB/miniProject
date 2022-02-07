const express = require('express');
const DbUtils = require('../models/dboperation');
const Member = require('../models/member');

const { request } = require('http');
const router = express.Router();


router.use((req,res,next)=>{
  console.log('middleware routes/create');
  next();
})

router.route('/').get((req,res)=>{
  console.log('create working...')
  // let member = {...req.body};
  res.render('../views/create.html');

  
  // DbUtils.addMember(member).then(result =>{
  //   res.status(201).json(result);
  // }).catch(error => {console.log(error);})
  
})
router.route('/').get((req,res)=>{
  try{
    res.render('../views/create.html')
  }catch(error){
    console.log("createrror")

  };
})

module.exports = router;