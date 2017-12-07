const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const app = express();
const port = process.env.PORT || 5000;
const subRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const taskRouter = require('./src/routes/taskRoutes')();
app.use('/', taskRouter);

// const url = 'mongodb://localhost:27017/todos';

// app.get('/', function (req, res) {
//     mongodb.connect(url, function (err, db) {
//         const collection = db.collection('tasks');
//         collection.find({}).toArray(function (err, results) {
//             console.log(results);
//             res.render('index', {
//                 tasks: results
//             });
//             db.close();
//         });
//     });
// });

// app.post('/', function (req, res) {
//     mongodb.connect(url, function (err, db) {
//         const collection = db.collection('tasks');
//         if (req.body.task.trim()) {
//             collection.insertOne(req.body, function (err, results) {
//                 db.close();
//             });
//         }
//     });
//     res.redirect('/');
//     console.log(req.body);
// });

// app.get('/delete/:id', function (req, res) {
//     const id = new objectId(req.params.id);
//     mongodb.connect(url, function (err, db) {
//         const collection = db.collection('tasks');
//         collection.deleteOne({
//             _id: id
//         }, function (err, results) {
//             if (err) {
//                 res.status(500).send(err);
//             } else {
//                 console.log('Deleted ' + req.params.id);
//             }
//         });
//         db.close();
//     });
//     res.redirect('/');
// });

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