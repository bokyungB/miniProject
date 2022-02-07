
const express = require('express');
const DbUtils = require('../models/dboperation');
const Member = require('../models/member');
const { request } = require('http');
const router = express.Router();


router.use((req,res,next)=>{
  console.log('middleware');
  next();
})

router.route('/members').get((req,res)=>{
  DbUtils.getMembers().then(result =>{
    res.json(result[0]);
  })
  
})

router.route('/members/:id').get((req,res)=>{
  DbUtils.getMember(req.params.id).then(result =>{
    res.json(result[0]);
  })
  
})

router.route('/members').post((req,res)=>{
  let member = {...req.body};
  DbUtils.addMember(member).then(result =>{
    res.status(201).json(result);
  })
  
})

module.exports = router;