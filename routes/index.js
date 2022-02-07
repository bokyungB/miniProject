
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

    // res.json(result[0]);
  }).catch(error => {console.log(error);})
  
})

router.route('/member_id=:id').get((req,res)=>{
  let memberId = req.params.id
  DbUtils.getMember(memberId).then(result =>{
    res.render('../views/index.html',{sample_data:result[0]});
  }).catch(error => {console.log(error);})
  
})


module.exports = router;