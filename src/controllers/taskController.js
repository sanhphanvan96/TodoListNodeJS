const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const taskController = function () {
    console.log('taskController');

    const url = 'mongodb://localhost:27017/todos';
    const middleware = function (req, res, next) {
        next();
    };
    const getIndex = function (req, res) {
        mongodb.connect(url, function (err, db) {
            const collection = db.collection('tasks');
            collection.find({}).toArray(function (err, results) {
                res.render('index', {
                    tasks: results
                });
                db.close();
            });
        });
    };
    const addTask = function (req, res) {
        mongodb.connect(url, function (err, db) {
            const collection = db.collection('tasks');
            if (req.body.task.trim()) {
                collection.insertOne(req.body, function (err, results) {
                    db.close();
                });
            }
        });
        res.redirect('/');
        console.log(req.body);
    };
    const destroyTask = function (req, res) {
        const id = new objectId(req.params.id);
        mongodb.connect(url, function (err, db) {
            const collection = db.collection('tasks');
            collection.deleteOne({
                _id: id
            }, function (err, results) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    console.log('Deleted ' + req.params.id);
                }
            });
            db.close();
        });
        res.redirect('/');
    };
    return {
        middleware: middleware,
        getIndex: getIndex,
        addTask: addTask,
        destroyTask: destroyTask
    };
};

module.exports = taskController;