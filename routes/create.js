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
  try{
    res.render('../views/create.html')
  }catch(error){
    console.log("createrror")

  };
})

router.post('/',(req,res)=>{
  let member = {...req.body};
  DbUtils.addMember(member).then(result =>{
    res.redirect('/');  
  }).catch(error => {
    console.log(error);})
})

module.exports = router;