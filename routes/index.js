
const express = require('express');
const DbUtils = require('../models/dboperation');
const Member = require('../models/member');

const { request } = require('http');
const router = express.Router();


router.use((req,res,next)=>{
  console.log('middleware');
  next();
})

router.route('/').get((req,res)=>{
  DbUtils.getMembers().then(result =>{
    res.render('../views/index.html',{sample_data:result[0]});
    console.log(result);
    // res.json(result[0]);
  }).catch(error => {console.log(error);})
  
})

router.route('/members/:id').get((req,res)=>{
  DbUtils.getMember(req.params.id).then(result =>{
    res.json(result[0]);
  })
  
})


module.exports = router;