const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const nunjucks = require('nunjucks');

const app = express();
const port = process.env.PORT || 5000;
const subRouter = express.Router();

app.use(express.static('public'));
// app.set('views', './src/views');
// app.set('view engine', 'ejs');

// Configure Nunjucks
nunjucks.configure('./src/views', {
    autoescape: true,
    cache: false,
    express: app
});

// Set Nunjucks as rendering engine for pages with .html suffix
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const taskRouter = require('./src/routes/taskRoutes')();
app.use('/', taskRouter);

subRouter.route('/')
    .get(function (req, res) {
        console.log(__dirname);
        res.sendFile(__dirname + '/src/views/subRouter.html');
        // res.render('subRouter');
    });

app.use('/subRouter', subRouter);

app.listen(port, function () {
    console.log('Running in port 5000');
});