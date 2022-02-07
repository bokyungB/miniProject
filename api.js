
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const DbUtils = require('./dboperation');
const Member = require('./member');
const { request } = require('http');
const app = express();
const router = express.Router();

-
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((req,res,next)=>{
  console.log('middleware');
  next();
})

router.route('/members').get((req,res)=>{
  DbUtils.getMembers().then(result =>{
    res.json(result[0]);
  })
  
})
// http://localhost:8090/api/members postman test - get 

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

const port = process.env.PORT || 8090;
app.listen(port);
console.log('Member API is running at '+port);




