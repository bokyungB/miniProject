
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
  if ('member_id'in req.query){
      let memberId = req.query.member_id;
      DbUtils.getMember(memberId).then(result =>{
      res.render('../views/index.html',{search_data:result[0]});
    }).catch(error => {console.log(error);})
  }else{
    DbUtils.getMembers().then(result =>{
      res.render('../views/index.html',{search_data:result[0]});
    }).catch(error => {console.log(error);})
  }
})



module.exports = router;