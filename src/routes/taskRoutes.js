const express = require('express');
const taskRouter = express.Router();
const mongoose = require('mongoose');
const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const router = function () {
    const taskController = require('../controllers/taskController')();
    taskRouter.use(taskController.middleware);
    taskRouter.route('/')
        .get(taskController.getIndex)
        .post(taskController.addTask);
    taskRouter.route('/delete/:id')
        .get(taskController.destroyTask);
    return taskRouter;
};

module.exports = router;