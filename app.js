import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient as mongodb} from 'mongodb';
import {ObjectID as objectId} from 'mongodb';
import nunjucks from 'nunjucks';
import session from 'express-session';
import flash from 'express-flash';
import router from './src/routes/routers';

const app = express();
const port = process.env.PORT || 5000;
const subRouter = express.Router();

app.use(express.static('public'));

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

// Session
app.use(session({
    secret: 'todos',
}));

// Use Flash Message
app.use(flash());
app.use(router);
// const taskRouter = require('./src/routes/taskRoutes')();
// app.use('/', taskRouter);

// subRouter.route('/')
//     .get(function (req, res) {
//         console.log(__dirname);
//         res.sendFile(__dirname + '/src/views/subRouter.html');
//         // res.render('subRouter');
//     });

// app.use('/subRouter', subRouter);

app.listen(port, function () {
    console.log('Running in port 5000');
});