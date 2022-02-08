
const express = require('express');
const nunjucks = require("nunjucks");
const bodyParser = require('body-parser');
const cors = require('cors');
const dateFilter = require('nunjucks-date-filter');

const { request } = require('http');

const app = express();
const main = require('./routes/index');
const create = require('./routes/create');
const edit = require('./routes/edit');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set("view engine", "html");

function setUpNunjucks() {

    let env = nunjucks.configure("views", {
        express: app,
        watch: true
    });
    env.addFilter('date', dateFilter);
};
setUpNunjucks();

app.use(cors());
app.use('/', main);
app.use('/create', create);
app.use('/edit', edit);



const port = process.env.PORT || 8080;
app.listen(port);
console.log('Member API is running at '+port);




