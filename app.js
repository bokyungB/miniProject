
const express = require('express');
const nunjucks = require("nunjucks");
const bodyParser = require('body-parser');
const cors = require('cors');

const { request } = require('http');

const app = express();
const main = require('./routes/index');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set("view engine", "html"); 
nunjucks.configure("views", {
    express: app,
    watch: true
});

app.use(cors());
app.use('/', main);



const port = process.env.PORT || 8090;
app.listen(port);
console.log('Member API is running at '+port);




